# AI-Powered-Web-Content-Summarizer-Chrome-Extension-

A lightweight Chrome extension that leverages the **Google Gemini API** to automatically summarize articles, blogs, or any webpage content into succinct **Brief**, **Detailed**, or **Bullet-Point** formats.

---

## Features

* **AI-Powered Text Summarization** – Harnesses the Google Gemini API for powerful and accurate content summarization.
* **Multiple Summary Modes**:
* **Brief** – Short and to-the-point
* **Detailed** – Comprehensive and explanatory
* **Bullet Points** – Quick read with key highlights
* **Easy Webpage Integration** – Summarize articles directly while browsing.
* **Minimalist and Lightweight** – Designed for speed and low resource usage.

---

## Table of Contents

* [Demo & Screenshots](#demo--screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [Architecture](#architecture)
* [Technologies](#technologies)
* [Future Enhancements](#future-enhancements)
* [Author & Contact](#author--contact)
* [Contributing](#contributing)
* [License](#license)

---

## Demo & Screenshots



* **Extension Icon & Popup UI**
  ![Popup Screenshot]
  
  <img width="568" height="598" alt="Screenshot 2025-09-06 020335" src="https://github.com/user-attachments/assets/5b636ac1-3207-4758-8adf-7cb11b60d03f" />

* **Summarization Modes Display**

<img width="618" height="686" alt="Screenshot 2025-09-06 015523" src="https://github.com/user-attachments/assets/d0753a5e-56fe-49d5-9227-e2e354ff0a4a" />


---

## Installation

### From Chrome Web Store (future)

> *(If you plan to publish this there)*

### From Source (manual installation)

1. Clone this repository:

   ```bash
   git clone https://github.com/SiddayyaRH5/AI-Powered-Web-Content-Summarizer-Chrome-Extension-.git
   cd AI-Powered-Web-Content-Summarizer-Chrome-Extension-
   ```

2. Open Chrome and go to `chrome://extensions`.

3. Enable **Developer mode** (top right corner).

4. Click **Load unpacked**, then select this project’s root folder.

---

## Usage

1. Click the extension’s icon in your Chrome toolbar.
2. Choose your preferred summary mode: **Brief**, **Detailed**, or **Bullet Points**.
3. Click **Summarize** and get a refined version of the webpage content.
4. Copy your summary or close the popup to continue browsing.

---

## Architecture & File Structure

```
AI-Powered-Web-Content-Summarizer/
│
├── manifest.json           # Chrome extension configuration
├── popup.html              # UI for the extension popup
├── popup.js                # Handles summarization logic & API calls
├── popup.css               # Styling for the popup interface
│
├── background.js (optional) # For handling background tasks
│
├── icons/                  # Icons for the browser toolbar
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── screenshots/            # Demo screenshots
│   └── popup.png
│
└── README.md               # Project documentation
```

---

## Technologies Used

* **Chrome Extensions API** – Popup interface, background processes, and UI integration.
* **JavaScript (ES6)** – Core functionality and API interaction.
* **Google Gemini API** – Advanced AI-driven summarization.
* **HTML & CSS** – Popup layout and styling.

---

## Future Enhancements

* [ ] Publish to Chrome Web Store for easy installation
* [ ] Add support for summarizing selected text only
* [ ] Include user-configurable summary length or style preferences
* [ ] Add multilingual summarization support
* [ ] Implement offline or local summarization (if possible)

---

## Author & Contact

**Siddayya Rudrayya Hiremath**
Bengaluru, India
[GitHub](https://github.com/SiddayyaRH5) • [LinkedIn]()

---

## Contributing

Contributions are warmly welcome! Please follow this workflow:

1. Fork this repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add <feature>"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request with a clear description and context

---

## License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it freely.

---

