# Glass of Wine – Wine Collection Web App

## Overview
This project is a dynamic, data-driven mobile web app that showcases a curated collection of premium wines. The app consists of a landing page, a wine collection page, and a wine details page. It features responsive design, custom typography, and sleek, modern styling using a carefully selected color palette.

## Features
- **Landing Page:**
    - Welcomes users with an engaging full-screen background.
    - Provides a call-to-action button to navigate to the wine collection.

- **Wine Collection Page:**
    - Dynamically loads and displays a list of wines from a JSON data file.
    - Each wine is displayed as a card with its image, name, type, and year.
    - Tapping on a wine card navigates to the Wine Details page.

- **Wine Details Page:**
    - Dynamically renders detailed information for the selected wine.
    - Includes a high-quality wine image, key statistics (year, region, type), a detailed description, rating stars, and top notes with icons.
    - Contains a “back” button (with a back arrow icon) to return to the Wine Collection.
    - The layout is modern and minimal with a champagne-beige info container that enhances readability.

- **References & Credits Page:**
    - Dynamically loads external image references, background references, and library license information from a JSON file.
    - Provides proper credits for all external sources (images, backgrounds, libraries).

- **Bonus (Single-Page Application):**
    - The entire project is built as a single-page application using dynamic content rendering with JavaScript.

## Folder Structure
```
/wine-app-project2
├── css/
│   ├── styles.css             # Main custom styles
│   ├── responsive.css         # Responsive design styles
│   ├── references.css         # Custom styles for the References page
├── data/
│   ├── items.json             # JSON data for the wine collection
│   └── references.json        # JSON data for references & credits
├── img/                       # All images used for this project
├── js/
│   ├── app.js                 # Main JavaScript for dynamic content (wine collection and details)
│   └── references.js          # JavaScript for dynamically rendering the references page
├── index.html                 # Landing page and Wine Collection page
├── references.html            # References & Credits page
└── README.md                  # Project documentation (this file)
```

## Setup & Installation
1. **Clone or Download the Repository:**  
   Ensure that all folders and files are kept in the same structure as shown above.

2. **Open the Project in Your Preferred Editor:**  
   Use an editor such as Visual Studio Code, Sublime, or any IDE of your choice.

3. **Local Server:**  
   Since the project fetches JSON files via HTTP, run a local server (e.g., using Live Server in VS Code, `http-server` from npm, or similar) to avoid CORS issues.

4. **Access the App:**
    - **Landing/Wine Collection/Details:** Open `index.html` in your browser.
    - **References:** Open `references.html` in your browser.

## Technologies Used
- **HTML5 & CSS3:** For markup and styling.
- **JavaScript (ES6+):** For dynamic content rendering and fetching data from JSON files.
- **Bootstrap:** For responsive layout and basic styling.
- **Font Awesome:** For iconography (back arrow, social icons, rating stars, and top notes icons).
- **Google Fonts:** For custom typography (Montserrat and Playfair Display).

## Customization & Styling
- **Color Palette:**
    - **Bistre:** `#40210F` – Used for backgrounds and headers.
    - **Barn Red:** `#740000` – Used for call-to-action buttons and accent text.
    - **Bronze:** `#DDA52A` – Used for text highlights and accents.
    - **Avocado:** `#76B041` – Used for icons and subtle details.
    - **Champagne-Beige:** `#F5E6D3` – Used for light background sections.

- **Dynamic Rendering:**
    - The wine collection and details are dynamically rendered from `data/items.json`.
    - The references and credits page is dynamically rendered from `data/references.json`.

- **Single-Page Application Approach:**
    - JavaScript functions toggle visibility between the Landing, Collection, and Details views.
    - The project is built to run as one HTML file (with dynamic content), fulfilling the bonus requirement.

## Credits & References
- **Image Credits:**  
  All images used are referenced in the `references.json` file, with appropriate links to the original sources.
- **External Libraries:**
    - **Font Awesome:** Licensed under CC BY 4.0 (Free version).
    - **Google Fonts:** Licensed under the Open Font License.
- **Background and Additional Resources:**  
  Additional background images and inspirations are credited on the References page.

## License
This project is for educational purposes. All external resources are credited in the References & Credits page. For any commercial use, please ensure you have the proper licenses for all assets and libraries used.

---
