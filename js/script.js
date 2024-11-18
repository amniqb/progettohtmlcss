function sendMail () {
    let parms = {
        name : document.getElementById('name').value,
        email: document.getElementById('email').value,
        message : document.getElementById('message').value

    }
emailjs.send('service_tl176ib', 'template_v5zcy0l', parms).then(alert('Email sent!'))
}