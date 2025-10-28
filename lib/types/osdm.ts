// OSDM Graphical Elements Types
export type Orientation =
  | "to right"
  | "to left"
  | "up"
  | "bottom"
  | "top"
  | "Left"
  | "Top"
  | "Right"
  | "Bottom"
  | "top-to-bottom"
  | "-";

export type GraphicalElementCode =
  // Seats & Places
  | "SEAT"
  | "BERTH"
  | "COUCHETTE"
  | "WHEELCHAIR_SPACE"
  // Tables
  | "TABLE"
  | "BIG_TABLE"
  // Walls
  | "WALL_LEFT_3"
  | "WALL_RIGHT_3"
  | "WALL_LEFT_2"
  | "WALL_RIGHT_2"
  | "T_WALL_COMPARTMENTS_3"
  | "T_WALL_COMPARTMENTS_2"
  | "WALL_COMPARTMENTS_2"
  | "WALL_COMPARTMENTS_1"
  | "WALL_END_TO_END"
  | "WALL_MOVABLE"
  // Arrows
  | "ARROW_UPPER_LEVEL_LEFT"
  | "ARROW_LOWER_LEVEL_LEFT"
  | "ARROW_UPPER_LEVEL_RIGHT"
  | "ARROW_LOWER_LEVEL_RIGHT"
  // Service Areas
  | "SECOND_CLASS_AREA"
  | "FIRST_CLASS_AREA"
  | "BAR_AREA"
  | "MOBILE_PHONE_AREA"
  | "MOBILE_PHONE_FORBIDDEN_AREA"
  | "PRM_AREA"
  | "FAMILY_AREA"
  | "RESTAURANT_AREA"
  | "BICYCLE_AREA"
  | "LUGGAGE_AREA"
  | "LUGGAGE_LOCKER"
  | "CONFERENCE"
  | "PRAM_AREA"
  | "WARDROBE_AREA"
  | "BIN"
  | "TOILET_AREA"
  | "SILENCE_AREA"
  | "PLAYGROUND_AREA"
  | "NON_SMOKING_AREA"
  | "POWER_SOCKET"
  | "PRIORITY_SEAT"
  | "WIFI_AREA"
  | "PRM_TOILET"
  | "AIR_CONDITIONING"
  | "USB_SOCKET"
  | "RECLINABLE_SEAT"
  | "WINDOW"
  | "STAIR_UPWARDS_AREA"
  | "STAIR_DOWNWARDS_AREA"
  | "WORKING_AREA"
  | "ANTI_ALLERGIC_AREA"
  | "MEETING_AREA_7"
  | "MEETING_AREA_12"
  | "SKI_AREA"
  | "STAFF_AREA"
  | "PHONE_BOOTH"
  | "T_LOOP"
  | "PETS_AREA"
  | "SLEEPING_CABIN_TOILET_SHOWER"
  | "CONNECTABLE_COMPARTMENTS"
  | "SHOWER"
  | "BABY_CARE_TABLE"
  | "TODDLER_AREA"
  | "WHEELCHAIR_PUSH_BUTTON"
  | "SINK"
  | "WOMEN_COMPARTMENT"
  | "WINDOW_2"
  | "WINDOW_3"
  // Doors
  | "DOOR_OPENING_LEFT"
  | "DOOR_OPENING_RIGHT"
  | "SLIDING_DOOR"
  | "ENTRY_EXIT"
  // Coach Structure
  | "DRIVER_AREA"
  | "TRAIN_DRIVER_AREA"
  | "BUS_DRIVER_AREA"
  | "COACH_PASSAGE"
  | "COACH_WALL_NO_PASSAGE"
  | "COMPARTMENT_WALL"
  | "COMPARTMENT_PASSAGE"
  | "COMPARTMENT_PASSAGE_LOW"
  | "COMPARTMENT_PASSAGE_HIGH"
  | "TABLE_RESTAURANT"
  | "MULTI_FUNCTION_AREA";

export interface GraphicalElement {
  id: string;
  code: GraphicalElementCode;
  orientation: Orientation;
  x: number;
  y: number;
  size?: {
    width: number;
    height: number;
  };
  width?: number;
  height?: number;
  // Additional properties for specific elements
  seatNumber?: string;
  placeProperties?: string[];
  // Visual properties
  color?: string;
  opacity?: number;
}

export interface CoachLayout {
  id: string;
  name: string;
  description?: string;
  width: number; // in grid units
  height: number; // in grid units
  elements: GraphicalElement[];
  metadata?: {
    version: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ElementCategory {
  id: string;
  name: string;
  elements: {
    code: GraphicalElementCode;
    name: string;
    icon: string;
    orientations: Orientation[];
  }[];
}

// Default coach dimensions (scaled to grid)
export const DEFAULT_COACH_WIDTH = 120; // 24m scaled to 120 units
export const DEFAULT_COACH_HEIGHT = 14; // 2.8m scaled to 14 units
export const GRID_SIZE = 20; // pixels per grid unit
