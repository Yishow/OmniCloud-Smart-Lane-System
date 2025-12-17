export interface SensorData {
  temperature: number;
  humidity: number;
  co: number;
  pm25: number;
}

export type LaneStatus = 'GO' | 'STOP';

export interface LogEntry {
  id: number;
  time: string;
  plate: string;
  status: string;
}