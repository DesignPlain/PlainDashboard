export interface DatabaseInstanceSettingsMaintenanceWindow {
  // Day of week (`1-7`), starting on Monday
  Day?: number;

  // Hour of day (`0-23`), ignored if `day` not set
  Hour?: number;

  /*
Receive updates earlier (`canary`) or later
(`stable`)

The optional `settings.insights_config` subblock for instances declares Query Insights([MySQL](https://cloud.google.com/sql/docs/mysql/using-query-insights), [PostgreSQL](https://cloud.google.com/sql/docs/postgres/using-query-insights)) configuration. It contains:
*/
  UpdateTrack?: string;
}
