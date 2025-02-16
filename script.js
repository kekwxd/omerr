const messages = [
    "Emin misin?",  
    "Gerçekten emin misin??",  
    "Kesin misin?",  
    "Bebiş lütfen...",  
    "Bir daha düşün!",  
    "Hayır dersen gerçekten çok üzüleceğim...",  
    "Çok üzüleceğim...",  
    "Çok çok çok üzüleceğim...",  
    "Tamam, peki, sormayı bırakıyorum...",  
    "Şaka yaptım, lütfen evet de! ❤️"  

];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}