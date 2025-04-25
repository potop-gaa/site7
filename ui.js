// Обработчик подсказок
const tooltip = document.getElementById('tooltip');

document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    if (intersects.length > 0) {
        let object = intersects[0].object;
        // Ищем родительский объект с данными
        while (object && !object.userData?.title) {
            object = object.parent;
        }
        
        if (object?.userData?.title) {
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX + 15}px`;
            tooltip.style.top = `${event.clientY + 15}px`;
            
            tooltip.innerHTML = `
                <strong>${object.userData.title}</strong><br>
                ${object.userData.description.replace(/\n/g, '<br>')}
            `;
            return;
        }
    }
    tooltip.style.display = 'none';
});

// Переключение зон
function switchZone(zone) {
    switch(zone) {
        case 'lcz':
            createLCZ();
            break;
        case 'hcz':
            createHCZ();
            break;
        case 'office':
            createOfficeZone();
            break;
    }
}

// Навешиваем обработчики на кнопки
document.querySelectorAll('.zone-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Снимаем активность со всех кнопок
        document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active'));
        // Активируем текущую
        btn.classList.add('active');
        // Переключаем зону
        switchZone(btn.dataset.zone);
    });
});
