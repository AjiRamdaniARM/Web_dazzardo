const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.list');
 navLinks.forEach(navLinkEL => {
    const navLinkpathname = new URL(navLinkEL.href).pathname;

    if(activePage === navLinkpathname) {
        navLinkEL.classList.add('active');
    }
 });