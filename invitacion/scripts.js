document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        if (name && phone) {
            const message = `Hola, soy ${name}. Confirmo mi asistencia a la boda de María & Juan.`;
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Countdown timer
    const countdown = document.getElementById('countdown');
    const weddingDate = new Date('September 15, 2024 17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdown.innerHTML = "¡Ya es el día de la boda!";
        }
    }

    setInterval(updateCountdown, 1000);
});
