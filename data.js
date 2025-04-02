var APP_DATA = {
  "scenes": [
    {
      "id": "0-office-desks",
      "name": "Office Desks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.895171690108807,
        "pitch": 0.07323183260421118,
        "fov": 1.2536977845581114
      },
      "linkHotspots": [
        {
          "yaw": 0.045320515392806016,
          "pitch": 0.21159533652056872,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.8563659224456686,
        "pitch": -0.01431184607417002,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7917811865373894,
          "pitch": 0.17076093972312734,
          "rotation": 0,
          "target": "0-office-desks"
        },
        {
          "yaw": -0.03772409473547356,
          "pitch": 0.22659043397296763,
          "rotation": 6.283185307179586,
          "target": "3-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-google-meeting-room",
      "name": "Google Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.02652100454603,
          "pitch": 0.4974462656287173,
          "rotation": 7.0685834705770345,
          "target": "3-lounge"
        },
        {
          "yaw": -2.3087214029042844,
          "pitch": 0.2667640388366799,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.0930807952266033,
        "pitch": 0.0054165428210453115,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9425973833541477,
          "pitch": 0.21480301467952145,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.5468519569768908,
          "pitch": 0.1008226084280004,
          "rotation": 10.995574287564278,
          "target": "2-google-meeting-room"
        },
        {
          "yaw": 3.1091434408096843,
          "pitch": 0.29682234754730175,
          "rotation": 5.497787143782138,
          "target": "4-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.22970143634496765,
        "pitch": -0.35838556970564106,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.720993335589931,
          "pitch": 0.29982204829578407,
          "rotation": 1.5707963267948966,
          "target": "3-lounge"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ookla Denver Office Sneak Peek",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
