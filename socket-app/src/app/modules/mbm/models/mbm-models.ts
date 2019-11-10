export interface MbmMessage {
  start: string;
  type: string; // D/A
  size: string;
  macAddr: string;
  word: string; // W
  audio: number;
  spell: string;
  crc: string;
}

export interface DeviceInfo {
  no: number;
  date: number;
  count: number;
  word: string;
}

export interface LearningInfo {
  no: number;
  date: number;
  count: number;
  word: string;
}

