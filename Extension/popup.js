document.getElementById("summarize").addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    const summaryType = document.getElementById("summary-type").value;

    // Show loader
    resultDiv.innerHTML = '<div class="loader"></div>';

    // Get the user's API key
    chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
        if (!geminiApiKey) {
            resultDiv.textContent = "❌ No API key found. Please go to the options page to set up your API key.";
            return;
        }

        // Get the article text from the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            chrome.tabs.sendMessage(tab.id, { type: "GET_ARTICLE_TEXT" }, async ({ text }) => {
                if (!text) {
                    resultDiv.textContent = "⚠️ Can't extract text from this page.";
                    return;
                }

                try {
                    const summary = await getGeminiSummary(text, summaryType, geminiApiKey);
                    resultDiv.textContent = summary;
                } catch (error) {
                    resultDiv.textContent = `❌ Gemini Error: ${error.message}`;
                }
            });
        });
    });
});

async function getGeminiSummary(rawText, summaryType, apiKey) {
    const max = 50000;
    const text = rawText.length > max ? rawText.slice(0, max) + "..." : rawText;

    const promptMap = {
        brief: `Summarize in 2-3 sentences:\n\n${text}`,
        detailed: `Give a detailed summary:\n\n${text}`,
        bullet: `Provide a bullet point list of the main points (start each line with "• "):\n\n${text}`,
    };

    const prompt = promptMap[summaryType] || promptMap.brief;

    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.5 },
            }),
        }
    );

    if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error?.message || "Failed to get summary");
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "⚠️ No summary generated.";
}

document.getElementById("copy-btn").addEventListener("click", () => {
    const text = document.getElementById("result").innerText;
    if(!text) return;

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("copy-btn");
        const old =btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = old;
        }, 2000);
    });
});