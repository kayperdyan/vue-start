


const toggleDarkMode = () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    html.classList.toggle('theme-dark');
    body.classList.toggle('theme-dark')
}


export default toggleDarkMode

