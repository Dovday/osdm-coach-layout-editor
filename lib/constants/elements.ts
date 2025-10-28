import { ElementCategory, GraphicalElementCode, Orientation } from "../types/osdm";

export const ELEMENT_CATEGORIES: ElementCategory[] = [
  {
    id: "seats",
    name: "Seats & Places",
    elements: [
      {
        code: "SEAT",
        name: "Seat",
        icon: "Armchair",
        orientations: ["to right", "to left", "up", "bottom"]
      },
      {
        code: "BERTH",
        name: "Berth",
        icon: "Bed",
        orientations: ["to left", "to right"]
      },
      {
        code: "COUCHETTE",
        name: "Couchette",
        icon: "Bed",
        orientations: ["to right", "to left"]
      },
      {
        code: "WHEELCHAIR_SPACE",
        name: "Wheelchair Space",
        icon: "Wheelchair",
        orientations: ["-"]
      }
    ]
  },
  {
    id: "tables",
    name: "Tables",
    elements: [
      {
        code: "TABLE",
        name: "Table",
        icon: "Table",
        orientations: ["top", "bottom"]
      },
      {
        code: "BIG_TABLE",
        name: "Big Table",
        icon: "Table",
        orientations: ["top", "bottom"]
      }
    ]
  },
  {
    id: "walls",
    name: "Walls",
    elements: [
      {
        code: "WALL_LEFT_2",
        name: "Small Wall Left",
        icon: "Square",
        orientations: ["bottom", "top"]
      },
      {
        code: "WALL_RIGHT_2",
        name: "Small Wall Right",
        icon: "Square",
        orientations: ["bottom", "top"]
      },
      {
        code: "WALL_COMPARTMENTS_2",
        name: "Compartment Wall",
        icon: "Square",
        orientations: ["bottom", "top"]
      },
      {
        code: "WALL_END_TO_END",
        name: "End-to-End Wall",
        icon: "Square",
        orientations: ["top-to-bottom"]
      }
    ]
  },
  {
    id: "doors",
    name: "Doors",
    elements: [
      {
        code: "DOOR_OPENING_LEFT",
        name: "Door Left",
        icon: "DoorOpen",
        orientations: ["Left", "Top", "Right", "Bottom"]
      },
      {
        code: "DOOR_OPENING_RIGHT",
        name: "Door Right",
        icon: "DoorOpen",
        orientations: ["Left", "Top", "Right", "Bottom"]
      },
      {
        code: "SLIDING_DOOR",
        name: "Sliding Door",
        icon: "DoorOpen",
        orientations: ["Left", "Top", "Right", "Bottom"]
      },
      {
        code: "ENTRY_EXIT",
        name: "Entry/Exit",
        icon: "DoorOpen",
        orientations: ["Left", "Top", "Right", "Bottom"]
      }
    ]
  },
  {
    id: "services",
    name: "Service Areas",
    elements: [
      {
        code: "TOILET_AREA",
        name: "Toilet",
        icon: "Wc",
        orientations: ["-"]
      },
      {
        code: "LUGGAGE_AREA",
        name: "Luggage Area",
        icon: "Luggage",
        orientations: ["-"]
      },
      {
        code: "BICYCLE_AREA",
        name: "Bicycle Area",
        icon: "Bike",
        orientations: ["-"]
      },
      {
        code: "FIRST_CLASS_AREA",
        name: "First Class",
        icon: "Star",
        orientations: ["-"]
      },
      {
        code: "SECOND_CLASS_AREA",
        name: "Second Class",
        icon: "Star",
        orientations: ["-"]
      },
      {
        code: "WIFI_AREA",
        name: "WiFi Area",
        icon: "Wifi",
        orientations: ["-"]
      }
    ]
  }
];

export const getElementByCode = (code: GraphicalElementCode) => {
  for (const category of ELEMENT_CATEGORIES) {
    const element = category.elements.find(el => el.code === code);
    if (element) return element;
  }
  return null;
};

export const getDefaultOrientation = (code: GraphicalElementCode): Orientation => {
  const element = getElementByCode(code);
  return element?.orientations[0] || "-";
};
