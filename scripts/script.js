const MobileButton = document.getElementById('btn_mobile')

function toggleMenu(e) {

    if (e.type === 'touchstart') e.preventDefault()

    const NavMenu = document.getElementById('nav')
    NavMenu.classList.toggle('active')

    const active = nav.classList.contains('active')

    e.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

MobileButton.addEventListener('click', toggleMenu)
MobileButton.addEventListener('touchstart', toggleMenu)