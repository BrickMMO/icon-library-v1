export type IconsId =
  | "video-kit"
  | "uptime"
  | "train"
  | "tracks"
  | "timesheets"
  | "timeline"
  | "stores"
  | "stats"
  | "road-view"
  | "radio"
  | "qr"
  | "power-grid"
  | "place-kit"
  | "pixelate"
  | "pick-a-brick"
  | "parts"
  | "navigation"
  | "media"
  | "gps"
  | "glyphs"
  | "flow"
  | "events"
  | "conversions"
  | "control-panel"
  | "colours"
  | "clock"
  | "cdn"
  | "brix"
  | "bricksum"
  | "brick-overflow";

export type IconsKey =
  | "VideoKit"
  | "Uptime"
  | "Train"
  | "Tracks"
  | "Timesheets"
  | "Timeline"
  | "Stores"
  | "Stats"
  | "RoadView"
  | "Radio"
  | "Qr"
  | "PowerGrid"
  | "PlaceKit"
  | "Pixelate"
  | "PickABrick"
  | "Parts"
  | "Navigation"
  | "Media"
  | "Gps"
  | "Glyphs"
  | "Flow"
  | "Events"
  | "Conversions"
  | "ControlPanel"
  | "Colours"
  | "Clock"
  | "Cdn"
  | "Brix"
  | "Bricksum"
  | "BrickOverflow";

export enum Icons {
  VideoKit = "video-kit",
  Uptime = "uptime",
  Train = "train",
  Tracks = "tracks",
  Timesheets = "timesheets",
  Timeline = "timeline",
  Stores = "stores",
  Stats = "stats",
  RoadView = "road-view",
  Radio = "radio",
  Qr = "qr",
  PowerGrid = "power-grid",
  PlaceKit = "place-kit",
  Pixelate = "pixelate",
  PickABrick = "pick-a-brick",
  Parts = "parts",
  Navigation = "navigation",
  Media = "media",
  Gps = "gps",
  Glyphs = "glyphs",
  Flow = "flow",
  Events = "events",
  Conversions = "conversions",
  ControlPanel = "control-panel",
  Colours = "colours",
  Clock = "clock",
  Cdn = "cdn",
  Brix = "brix",
  Bricksum = "bricksum",
  BrickOverflow = "brick-overflow",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.VideoKit]: "61697",
  [Icons.Uptime]: "61698",
  [Icons.Train]: "61699",
  [Icons.Tracks]: "61700",
  [Icons.Timesheets]: "61701",
  [Icons.Timeline]: "61702",
  [Icons.Stores]: "61703",
  [Icons.Stats]: "61704",
  [Icons.RoadView]: "61705",
  [Icons.Radio]: "61706",
  [Icons.Qr]: "61707",
  [Icons.PowerGrid]: "61708",
  [Icons.PlaceKit]: "61709",
  [Icons.Pixelate]: "61710",
  [Icons.PickABrick]: "61711",
  [Icons.Parts]: "61712",
  [Icons.Navigation]: "61713",
  [Icons.Media]: "61714",
  [Icons.Gps]: "61715",
  [Icons.Glyphs]: "61716",
  [Icons.Flow]: "61717",
  [Icons.Events]: "61718",
  [Icons.Conversions]: "61719",
  [Icons.ControlPanel]: "61720",
  [Icons.Colours]: "61721",
  [Icons.Clock]: "61722",
  [Icons.Cdn]: "61723",
  [Icons.Brix]: "61724",
  [Icons.Bricksum]: "61725",
  [Icons.BrickOverflow]: "61726",
};
