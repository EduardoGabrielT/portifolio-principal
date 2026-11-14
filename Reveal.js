// ==================== SCROLL REVEAL ====================
if (typeof ScrollReveal !== 'undefined') {
    window.revelar = ScrollReveal({
        reset: false,
        duration: 900,
        easing: 'ease-out',
        distance: '40px'
    });

    revelar.reveal('.efeito-txt-site', { origin: 'left' });
    revelar.reveal('.efeito-img-top', { origin: 'right', delay: 200 });
    revelar.reveal('.titulo', { origin: 'top' });
    revelar.reveal('.efeito-especialidades1', { origin: 'bottom', delay: 100 });
    revelar.reveal('.efeito-especialidades2', { origin: 'bottom', delay: 250 });
    revelar.reveal('.efeito-especialidades3', { origin: 'bottom', delay: 400 });
    revelar.reveal('.efeito-cert1', { origin: 'bottom', delay: 100 });
    revelar.reveal('.efeito-cert2', { origin: 'bottom', delay: 200 });
    revelar.reveal('.efeito-cert3', { origin: 'bottom', delay: 300 });
    revelar.reveal('.efeito-cert4', { origin: 'bottom', delay: 400 });
    revelar.reveal('.efeito-img-sobre', { origin: 'left' });
    revelar.reveal('.efeito-txt-sobre', { origin: 'right', delay: 200 });
    revelar.reveal('.efeito-form, .efeito-form1, .efeito-form2, .efeito-form3, .efeito-form4', {
        origin: 'bottom',
        interval: 100
    });
}
