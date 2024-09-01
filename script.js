document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("YOUR_USER_ID");

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (name && email && message) {
            emailjs.send("service_zbcxtjq", "template_tzkobda", {
                from_name: name,
                from_email: email,
                message: message
            }).then((response) => {
                alert('Terima kasih, ' + name + '! Pesan Anda telah terkirim.');
                form.reset();
            }, (error) => {
                alert('Gagal mengirim pesan. Silakan coba lagi.');
            });
        } else {
            alert('Harap isi semua bidang.');
        }
    });
});
