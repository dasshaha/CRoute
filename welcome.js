document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const enterBtn = document.getElementById('enterBtn');
    
    usernameInput.focus();
    
    // Обработчик нажатия Enter в поле ввода
    usernameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            enterBtn.click();
        }
    });
    
    // Обработчик клика по кнопке
    enterBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        
        if (username) {
            localStorage.setItem('croute_username', username);
        }
        window.location.href = 'html/index.html';
    });
});