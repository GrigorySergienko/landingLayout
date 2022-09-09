window.addEventListener("load", () => {
    const navItems = document.getElementById("nav-item__ul").querySelectorAll("li");
    const navItemsA = document.getElementById("nav-item__ul").querySelectorAll("a");
    navItems.forEach(function (navItem) {
        navItem.addEventListener("mouseout", function (e) {
            if (e.target.localName == "li") {
                e.target.classList.remove('nav-item__li-active');
            }
        });
        navItem.addEventListener("mouseover", function (e) {
            if (e.target.localName == "li") {
                e.target.classList.add('nav-item__li-active');
            }
        });
    })
    navItemsA.forEach(function (navItem) {
        navItem.addEventListener("mouseout", function (e) {
            if (e.target.localName == "a") {
                e.target.parentElement.classList.remove('nav-item__li-active');
            }
        });
        navItem.addEventListener("mouseover", function (e) {
            if (e.target.localName == "a") {
                e.target.parentElement.classList.add('nav-item__li-active');
            }
        });
    })

    const navbar = document.querySelector('.nav');
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    }
    window.onscroll = () => {
        if (window.scrollY > 300) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    }
});
