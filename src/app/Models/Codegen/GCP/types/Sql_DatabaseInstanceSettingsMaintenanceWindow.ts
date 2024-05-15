import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsMaintenanceWindow {
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

export function Sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "Day of week (`1-7`), starting on Monday",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Hour",
      "Hour of day (`0-23`), ignored if `day` not set",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTrack",
      "Receive updates earlier (`canary`) or later\n(`stable`)\n\nThe optional `settings.insights_config` subblock for instances declares Query Insights([MySQL](https://cloud.google.com/sql/docs/mysql/using-query-insights), [PostgreSQL](https://cloud.google.com/sql/docs/postgres/using-query-insights)) configuration. It contains:",
      [],
      false,
      false,
    ),
  ];
}
