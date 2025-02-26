/**
 * @typedef {Object} ImageReference
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef {Object} BackgroundReference
 * @property {string} title
 * @property {string} credit
 * @property {string} creditUrl
 * @property {string} imageUrl
 */

/**
 * @typedef {Object} LibraryLicense
 * @property {string} library
 * @property {string} license
 * @property {string} url
 */

/**
 * @typedef {Object} ReferencesData
 * @property {ImageReference[]} imageReferences
 * @property {BackgroundReference[]} backgroundReferences
 * @property {LibraryLicense[]} libraryLicenses
 * @property {string} licenseInfo
 */

/**
 * Fetch and render the references data.
 */
document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/references.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        /** @param {ReferencesData} data */
        .then(data => {
            renderReferences(data);
        })
        .catch(error => console.error("Error loading references:", error));
});

/**
 * Renders the references onto the page.
 * @param {ReferencesData} data
 */
function renderReferences(data) {
    // Render image references
    const imgRefList = document.querySelector("#ref-images ul");
    if (imgRefList) {
        data.imageReferences.forEach(ref => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${ref.title}</strong>: <a href="${ref.url}" target="_blank">${ref.url}</a>`;
            imgRefList.appendChild(li);
        });
    } else {
        console.warn("Image references container not found.");
    }

    // Render background references
    const bgRefList = document.querySelector("#ref-backgrounds ul");
    if (bgRefList) {
        data.backgroundReferences.forEach(ref => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${ref.title}</strong> by <a href="${ref.creditUrl}" target="_blank">${ref.credit}</a> on <a href="${ref.imageUrl}" target="_blank">Unsplash</a>`;
            bgRefList.appendChild(li);
        });
    } else {
        console.warn("Background references container not found.");
    }

    // Render library licenses
    const libLicenseList = document.querySelector("#ref-library-licenses ul");
    if (libLicenseList && data.libraryLicenses) {
        data.libraryLicenses.forEach(lib => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${lib.library}</strong> - ${lib.license}: <a href="${lib.url}" target="_blank">${lib.url}</a>`;
            libLicenseList.appendChild(li);
        });
    } else {
        console.warn("Library licenses container not found.");
    }

    // Render license info
    const licenseElem = document.querySelector("#ref-license p");
    if (licenseElem) {
        licenseElem.textContent = data.licenseInfo;
    } else {
        console.warn("License info container not found.");
    }
}
