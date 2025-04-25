// Создаем LCZ (Light Containment Zone)
function createLCZ() {
    // Очищаем сцену
    scene.children.slice().forEach(child => {
        if (child !== camera && child !== ambientLight && child !== directionalLight) {
            scene.remove(child);
        }
    });
    
    // Данные карты LCZ
    const lczMap = [
  {
    "type": "mediumD",
    "color": "#8a2be2",
    "title": "Class-D Cells (CD01)",
    "desc": "Стандартные камеры для объектов класса D",
    "x": -35,
    "z": 15,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": -5,
    "z": 15,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -5,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -5,
    "z": 0,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -5,
    "z": 25,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -5,
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
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 35,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -10,
    "z": 60,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 55,
    "rotation": 0
  },
  {
    "type": "small",
    "color": "#b22222",
    "title": "LCZ Armory\n(##00)",
    "desc": "Хранилище оружия",
    "x": -15,
    "z": 70,
    "rotation": 6.283185307179586
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 65,
    "rotation": 0
  },
  {
    "type": "medium",
    "color": "#5f9ea0",
    "title": "Water Closet (WC00)",
    "desc": "Санитарный узел для персонала",
    "x": 0,
    "z": 60,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 60,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 50,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 40,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 45,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 10,
    "z": 30,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 5,
    "z": 30,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 25,
    "z": 45,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#228b22",
    "title": "Garden Chamber (VT00)",
    "desc": "Зона отдыха с растениями",
    "x": 25,
    "z": 30,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 25,
    "z": 15,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#4682b4",
    "title": "Glass Room (GR18)",
    "desc": "Наблюдательная комната с прозрачными стенами",
    "x": 40,
    "z": 15,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": 5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": -5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": -15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
    "x": 10,
    "z": -15,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 20,
    "z": -15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": 10,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 5,
    "z": 0,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": -10,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": -5,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 0,
    "z": -15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -5,
    "z": -15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-corner",
    "color": "#555555",
    "title": "Corner Hallway",
    "desc": "Угловой коридор",
    "x": -15,
    "z": 0,
    "rotation": 0
  },
  {
    "type": "hall-t",
    "color": "#555555",
    "title": "T-Intersection",
    "desc": "Т-образный перекресток",
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
    "z": -5,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#d2691e",
    "title": "Office (PC15)",
    "desc": "Рабочее пространство для исследователей",
    "x": -15,
    "z": -30,
    "rotation": 0
  },
  {
    "type": "small",
    "color": "#b22222",
    "title": "AL-02",
    "desc": "Воздушный шлюз",
    "x": 10,
    "z": 15,
    "rotation": 0
  },
  {
    "type": "small",
    "color": "#b22222",
    "title": "AL-01",
    "desc": "Воздушный шлюз",
    "x": -15,
    "z": 45,
    "rotation": 6.283185307179586
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 5,
    "z": 15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "large",
    "color": "#f4c800",
    "title": "PT-00",
    "desc": "Камера содержания SCP-173",
    "x": 25,
    "z": 60,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 15,
    "z": 60,
    "rotation": 1.5707963267948966
  },
  {
    "type": "large",
    "color": "#75ff25",
    "title": "TC-01",
    "desc": "Камера содержания SCP-330",
    "x": -30,
    "z": -15,
    "rotation": 0
  },
  {
    "type": "large",
    "color": "#75ff25",
    "title": "#914",
    "desc": "Камера содержания SCP-914",
    "x": 40,
    "z": -15,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 30,
    "z": -15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "large",
    "color": "#3a00cc",
    "title": "EX-B",
    "desc": "КПП Б между ЛЗС и ТЗС",
    "x": 10,
    "z": -30,
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
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 10,
    "z": 55,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": 25,
    "z": 40,
    "rotation": 0
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 15,
    "rotation": 1.5707963267948966
  },
  {
    "type": "hall-straight",
    "color": "#555555",
    "title": "Straight Hallway",
    "desc": "Прямой коридор",
    "x": -15,
    "z": 50,
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
    "z": 40,
    "rotation": 0
  }
];
    
    // Создаем комнаты
    const rooms = [];
    lczMap.forEach(roomData => {
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
