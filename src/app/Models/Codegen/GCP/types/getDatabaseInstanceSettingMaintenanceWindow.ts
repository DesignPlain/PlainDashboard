export interface getDatabaseInstanceSettingMaintenanceWindow {
  // Receive updates earlier (canary) or later (stable)
  UpdateTrack?: string;

  // Day of week (1-7), starting on Monday
  Day?: number;

  // Hour of day (0-23), ignored if day not set
  Hour?: number;
}
