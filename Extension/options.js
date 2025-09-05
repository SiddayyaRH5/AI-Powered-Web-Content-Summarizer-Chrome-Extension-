document.addEventListener("DOMContentLoaded", () => {
    // Load saved API key
    chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
        if (geminiApiKey) {
            document.getElementById("api-key").value = geminiApiKey;
        }
    });

    // Save API key on button click
    document.getElementById("save-button").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();
        if (!apiKey) return;

        chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
            const msg = document.getElementById("success-message");
            msg.style.display = "block";
            setTimeout(() => window.close(), 1200);
        });
    });
});
