// FAQ аккордеон
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Горизонтальный скролл статей
const scrollContainer = document.querySelector('.articles-scroll');
const prevBtn = document.querySelector('.scroll-btn.prev');
const nextBtn = document.querySelector('.scroll-btn.next');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });
}




// Сохраненные настройки
function getSettings() {
    const settings = localStorage.getItem('routeSettings');
    return settings ? JSON.parse(settings) : null;
}

// ID маршрута
function generateRouteId() {
    return 'route_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Проверка, есть ли данные в localStorage при загрузке
document.addEventListener('DOMContentLoaded', function() {
    console.log('CRoute application loaded');
    
    // Можно добавить проверку сохраненного маршрута
    const savedRoute = localStorage.getItem('currentRoute');
    if (savedRoute) {
        console.log('Есть сохраненный маршрут');
    }
});









function saveSettings(city, style, activity, time, budget) {
    const settings = {
        city,
        style,
        activity,
        time,
        budget,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('routeSettings', JSON.stringify(settings));
}



// Текущий маршрут
function getCurrentRoute() {
    const route = localStorage.getItem('currentRoute');
    return route ? JSON.parse(route) : null;
}

// Сохранение маршрута в "Мои маршруты"
function saveToMyRoutes(route) {
    let myRoutes = JSON.parse(localStorage.getItem('myRoutes')) || [];
    
    // Проверка, нет ли уже такого маршрута
    if (!myRoutes.some(r => r.id === route.id)) {
        route.savedDate = new Date().toISOString();
        myRoutes.push(route);
        localStorage.setItem('myRoutes', JSON.stringify(myRoutes));
        alert('Маршрут сохранен в "Мои маршруты"!');
        return true;
    } else {
        alert('Этот маршрут уже сохранен!');
        return false;
    }
}

// Получить все сохраненные маршруты
function getMyRoutes() {
    return JSON.parse(localStorage.getItem('myRoutes')) || [];
}

// Поделиться маршрутом
function shareRoute(route) {
    const shareText = `Мой маршрут: ${route.title}\n${route.description}\n\nТочки маршрута:\n${route.points.map(p => `• ${p.name} (${p.time})`).join('\n')}`;
    
    if (navigator.share) {
        navigator.share({
            title: route.title,
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Маршрут скопирован в буфер обмена!');
        });
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    console.log('CRoute application loaded');
    
    // Проверка сохраненных данных
    const settings = getSettings();
    if (settings) {
        console.log('Сохраненные настройки:', settings);
    }
    
    const currentRoute = getCurrentRoute();
    if (currentRoute) {
        console.log('Текущий маршрут:', currentRoute.title);
    }
});










// Функция для загрузки "Моих маршрутов" (позже)
function loadMyRoutesPage() {
    const myRoutes = getMyRoutes();
    if (myRoutes.length === 0) {
        return '<div class="empty-state"><p>У вас пока нет сохраненных маршрутов</p></div>';
    }
    
    let html = '<div class="my-routes-grid">';
    myRoutes.forEach(route => {
        html += `
            <div class="saved-route-card">
                <h3>${route.title}</h3>
                <p>${route.city} • ${route.duration}</p>
                <p class="route-date">Сохранен: ${new Date(route.savedDate).toLocaleDateString('ru-RU')}</p>
                <button onclick="loadRoute(${route.id})" class="btn btn-secondary">Открыть</button>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

// Функция для загрузки маршрута по ID (позже)
function loadRoute(routeId) {
    const route = getRouteById(routeId);
    if (route) {
        localStorage.setItem('currentRoute', JSON.stringify(route));
        window.location.href = 'route.html';
    }
}
