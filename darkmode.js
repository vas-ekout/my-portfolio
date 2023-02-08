let darkMode = false;
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// check if darkMode is enabled
// if it's enabled, turn it of
// if it's disabled, turn it on

const enableDarkMode = () => {
    // add the class darkmode to the body
    document.body.classList.add('darkmode');
    darkMode = true;
};

const disableDarkMode = () => {
    // remove the class darkmode from the body
    document.body.classList.remove('darkmode');
    darkMode = false;
};


 darkModeToggle.addEventListener('click', () => {
    if (darkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
 });


