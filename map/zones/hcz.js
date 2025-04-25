// Создаем HCZ (Heavy Containment Zone)
function createHCZ() {
    // Очищаем сцену
    scene.children.slice().forEach(child => {
        if (child !== camera && child !== ambientLight && child !== directionalLight) {
            scene.remove(child);
        }
    });
    
    // Данные карты HCZ
    const hczMap = [
  {
    "type": "large",
    "color": "#3a00cc",
    "title": "EX-B",
    "desc": "КПП Б между ЛЗС и ТЗС",
    "x": 45,
    "z": 80,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#cc002c",
    "title": "EX-A",
    "desc": "КПП А между ЛЗС и ТЗС",
    "x": -30,
    "z": 30,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#9e77ff",
    "title": "CCP-B",
    "desc": "КПП Б между ТЗС и ОЗ",
    "x": 45,
    "z": -30,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#ff7794",
    "title": "CCP-A",
    "desc": "КПП А между ТЗС и ОЗ",
    "x": -15,
    "z": -30,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -20,
    "z": 30,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 30,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 40,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 0,
    "z": 65,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 0,
    "z": 55,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#d2691e",
    "title": "SCP-079 Containment",
    "desc": "Камера содержания SCP-079",
    "x": 0,
    "z": 80,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 45,
    "z": 65,
    "rotation": 0
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 45,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 45,
    "z": 60,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "",
    "desc": "",
    "x": 30,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 20,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 40,
    "z": 50,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": 50,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 15,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 45,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 15,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 0,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 0,
    "z": 45,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 5,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "large",
    "color": "#006400",
    "title": "Test Room",
    "desc": "Зона для опасных тестов",
    "x": 65,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 40,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 50,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 60,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 40,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 65,
    "z": 65,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 65,
    "z": 60,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 65,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "small",
    "color": "#ff8c00",
    "title": "SCP-096\n Containment",
    "desc": "Камера Застенчивого Парня",
    "x": 80,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 75,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#006400",
    "title": "H.I.D.",
    "desc": "▮▮▮",
    "x": 65,
    "z": 20,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#fc0100",
    "title": "SCP-939 Containment",
    "desc": "Бывшая камера содержания SCP-939",
    "x": 65,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#b22222",
    "title": "HCZ Armory",
    "desc": "Хранилище оружия",
    "x": 45,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 55,
    "z": -10,
    "rotation": 1.5707963267948966
  },
  {
    "type": "small",
    "color": "#8b0000",
    "title": "Tesla Gate",
    "desc": "Электрический барьер",
    "x": 30,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 65,
    "z": 10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 65,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 45,
    "z": -20,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 45,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 45,
    "z": 10,
    "rotation": 0
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 45,
    "z": 20,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 35,
    "z": 20,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 30,
    "rotation": 3.141592653589793
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 20,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 10,
    "rotation": 0
  },
  {
    "type": "small",
    "color": "#8b0000",
    "title": "Tesla Gate",
    "desc": "Электрический барьер",
    "x": 65,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 55,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 55,
    "z": 35,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 30,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 20,
    "z": -10,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": -10,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 5,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 25,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 20,
    "rotation": 0
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 15,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 5,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 5,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 0,
    "z": 5,
    "rotation": 1.5707963267948966
  },
  {
    "type": "very-large",
    "color": "#b8860b",
    "title": "Alpha Warhead Silo",
    "desc": "Тактический ядерный заряд",
    "x": -15,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "medium",
    "color": "#483d8b",
    "title": "SCP-049\n Containment",
    "desc": "Камера содержания SCP-049",
    "x": -15,
    "z": -15,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": -20,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 20,
    "rotation": 0
  },
  {
    "type": "very-large",
    "color": "#2f4f4f",
    "title": "SCP-106 Containment",
    "desc": "Камера содержания SCP-106",
    "x": -35,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": -15,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -25,
    "z": 55,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": -15,
    "z": 65,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -10,
    "z": 65,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 60,
    "rotation": 3.141592653589793
  }
];
    
    // Создаем комнаты
    const rooms = [];
    hczMap.forEach(roomData => {
        const room = createRoom(
            roomData.type, 
            roomData.color, 
            { title: roomData.title, description: roomData.desc }, 
            { x: roomData.x, z: roomData.z },
            roomData.rotation || 0
        );
        
        scene.add(room.group);
        rooms.push(room.mesh);
    });
    
    // Создаем соединения между комнатами
    createConnections(rooms);
}

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
