/*
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

$(document).ready(function(){   
        $(".btn").click(function() {
            $("#menu").toggleClass("show");
        
        });
    });
*/

// Gestisco apertura e chiusura del menu ad hamburger
function toggleMenu() {
    // 1. Seleziona il bottone che l'utente clicca (il selettore dal tuo CSS)
    const hamburgerButton = document.querySelector('.hamburger');
    
    // 2. Seleziona il menu a cui deve essere aggiunta la classe 'open'
    const menuPanel = document.querySelector('.menu');

    // Controllo di sicurezza: esegui solo se entrambi gli elementi esistono
    if (hamburgerButton && menuPanel) {
        
        // Aggiunge un "ascoltatore di eventi" al click del bottone hamburger
        hamburgerButton.addEventListener('click', function() {
            
            // La magia avviene qui: toglie o aggiunge la classe 'open'
            // Quando 'open' viene aggiunta, il CSS sposta il menu da -170px a 0.
            menuPanel.classList.toggle('open');
        });
    }
}

// Avvia la funzione non appena la pagina è pronta
toggleMenu();