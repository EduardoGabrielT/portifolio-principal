// ==================== CONTROLE DO MENU MOBILE ====================
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');
    const btnFechar = document.getElementById('btn-fechar');

    if (!btnMenu || !menu) return;

    const abrirMenu = () => {
        menu.classList.add('menu-abrir');
        menu.setAttribute('aria-hidden', 'false');
        btnMenu.setAttribute('aria-expanded', 'true');
        if (overlay) overlay.classList.add('ativo');
    };

    const fecharMenu = () => {
        menu.classList.remove('menu-abrir');
        menu.setAttribute('aria-hidden', 'true');
        btnMenu.setAttribute('aria-expanded', 'false');
        if (overlay) overlay.classList.remove('ativo');
    };

    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menu.classList.contains('menu-abrir')) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    if (btnFechar) {
        btnFechar.addEventListener('click', fecharMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', fecharMenu);
    }

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('menu-abrir')) {
            fecharMenu();
        }
    });
});
