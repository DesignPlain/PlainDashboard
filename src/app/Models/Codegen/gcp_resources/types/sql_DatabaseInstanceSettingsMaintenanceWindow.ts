import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_DatabaseInstanceSettingsMaintenanceWindow {
  // Day of week (`1-7`), starting on Monday
  day?: number;

  // Hour of day (`0-23`), ignored if `day` not set
  hour?: number;

  /*
Receive updates earlier (`canary`) or later
(`stable`)

The optional `settings.insights_config` subblock for instances declares Query Insights([MySQL](https://cloud.google.com/sql/docs/mysql/using-query-insights), [PostgreSQL](https://cloud.google.com/sql/docs/postgres/using-query-insights)) configuration. It contains:
*/
  updateTrack?: string;
}

export function sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "day",
      "Day of week (`1-7`), starting on Monday",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hour",
      "Hour of day (`0-23`), ignored if `day` not set",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTrack",
      "Receive updates earlier (`canary`) or later\n(`stable`)\n\nThe optional `settings.insights_config` subblock for instances declares Query Insights([MySQL](https://cloud.google.com/sql/docs/mysql/using-query-insights), [PostgreSQL](https://cloud.google.com/sql/docs/postgres/using-query-insights)) configuration. It contains:",
      [],
      false,
      false,
    ),
  ];
}
