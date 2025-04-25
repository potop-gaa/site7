// Создание соединений между комнатами
function createConnections(rooms) {
    // Удаляем старые соединения
    scene.children.filter(obj => obj.isLine).forEach(line => scene.remove(line));
    
    // Для каждой комнаты находим ближайшую и создаем соединение
    rooms.forEach(room => {
        // Находим ближайшую комнату
        let closestRoom = null;
        let minDistance = Infinity;
        
        rooms.forEach(otherRoom => {
            if (otherRoom === room) return;
            
            const distance = room.position.distanceTo(otherRoom.position);
            if (distance < minDistance && distance < 25) {
                minDistance = distance;
                closestRoom = otherRoom;
            }
        });
        
        if (closestRoom) {
            const connector = createConnector(room, closestRoom);
            scene.add(connector);
        }
    });
}

// Создаем Office Zone - заглушка
function createOfficeZone() {
    // Очищаем сцену
    scene.children.slice().forEach(child => {
        if (child !== camera && child !== ambientLight && child !== directionalLight) {
            scene.remove(child);
        }
    });
    
    // Добавляем заглушку
    const geometry = new THREE.BoxGeometry(60, 5, 60);
    const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 2.5, 0);
    scene.add(mesh);
    
    // Добавляем текст
    if (font) {
        const textGeometry = new THREE.TextGeometry("EZ", {
            font: font,
            size: 3,
            height: 0.5,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(0, 0, 0);
        textMesh.rotation.x = -Math.PI / 22;
        scene.add(textMesh);
    }
}
