let profile = document.querySelector('.profile');
let menu = document.querySelector('.menu');

profile.onclick = function () {
    menu.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.querySelector(".filter-review-btn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    // Show Popup with Smooth Animation
    filterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("show");
    });

    // Hide Popup with Smooth Animation
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    document.querySelectorAll(".rating-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".rating-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.querySelector(".manage-space-btn");
    const popup = document.getElementById("popup-manage");
    const closeBtn = document.getElementById("closemanage");

    // Show Popup with Smooth Animation
    filterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("show");
    });

    // Hide Popup with Smooth Animation
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const helpBtn = document.getElementById("help-tab");
    const helpSidebar = document.getElementById("helpSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    // Show Sidebar
    helpBtn.addEventListener("click", function () {
        helpSidebar.classList.add("show");
    });

    // Hide Sidebar
    closeSidebar.addEventListener("click", function () {
        helpSidebar.classList.remove("show");
    });

    // Hide when clicking outside the sidebar
    window.addEventListener("click", function (event) {
        if (!helpSidebar.contains(event.target) && !helpBtn.contains(event.target)) {
            helpSidebar.classList.remove("show");
        }
    });
});

function togglePasswordVisibility(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

document.querySelectorAll(".my-account .interest-tab .interest-badges").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("selected");
    });
});

const languages = ["Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Bengali", "Belarusian", "Bosnian", "Bulgarian", "Burmese", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "Dzongkha", "English", "Estonian", "Filipino", "Finnish", "French", "Georgian", "German", "Greek", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Irish", "Italian", "Japanese", "Kazakh", "Khmer", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latvian", "Lithuanian", "Luxembourgish", "Macedonian", "Malay", "Malayalam", "Maltese", "Mongolian", "Nepali", "Norwegian", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Serbian", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Swahili", "Swedish", "Tajik", "Tamil", "Thai", "Tigrinya", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Zulu"];
const searchBox = document.getElementById("search");
const dropdown = document.getElementById("lang-dropdown");
const selectedLanguages = document.getElementById("selectedLanguages");

function populateDropdown(filter = "") {
    dropdown.innerHTML = "";
    const filteredLanguages = languages.filter(lang => lang.toLowerCase().includes(filter.toLowerCase()));

    filteredLanguages.forEach(lang => {
        const div = document.createElement("div");
        div.textContent = lang;
        div.onclick = () => selectLanguage(lang);
        dropdown.appendChild(div);
    });
}

function selectLanguage(lang) {
    const langItem = document.createElement("div");
    langItem.className = "language-item";
    langItem.innerHTML = `${lang} <button class="delete-btn" onclick="removeLanguage(this)"><i class="fa-solid fa-trash"></i></button>`;
    selectedLanguages.appendChild(langItem);
    searchBox.value = "";
    populateDropdown();
}

function removeLanguage(button) {
    button.parentElement.remove();
}

searchBox.addEventListener("input", () => populateDropdown(searchBox.value));
document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "block";
    }
});

populateDropdown();


// // Open modal function
// function openModal() {
//     document.querySelector(".modal2").classList.add("show-modal2");
// }

// // Close modal function
// function closeModal() {
//     document.querySelector(".modal2").classList.remove("show-modal2");
// }

// // Close modal when clicking outside the modal content
// window.onclick = function(event) {
//     let modal = document.querySelector(".modal2");
//     if (event.target === modal) {
//         closeModal();
//     }
// };

// // Add event listeners after the DOM is loaded
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".add-lang-btn2").addEventListener("click", openModal);
//     document.querySelector(".btn-close-btn2").addEventListener("click", closeModal);
// });
