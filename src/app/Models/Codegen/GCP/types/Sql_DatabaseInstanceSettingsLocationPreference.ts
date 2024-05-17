import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsLocationPreference {
  /*
A GAE application whose zone to remain
in. Must be in the same region as this instance.
*/
  FollowGaeApplication?: string;

  /*
The preferred Compute Engine zone for the secondary/failover.

The optional `settings.maintenance_window` subblock for instances declares a one-hour
[maintenance window](https://cloud.google.com/sql/docs/instance-settings?hl=en#maintenance-window-2ndgen)
when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time. It supports:
*/
  SecondaryZone?: string;

  /*
The preferred compute engine
[zone](https://cloud.google.com/compute/docs/zones?hl=en).
*/
  Zone?: string;
}

export function Sql_DatabaseInstanceSettingsLocationPreference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FollowGaeApplication",
      "A GAE application whose zone to remain\nin. Must be in the same region as this instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecondaryZone",
      "The preferred Compute Engine zone for the secondary/failover.\n\nThe optional `settings.maintenance_window` subblock for instances declares a one-hour\n[maintenance window](https://cloud.google.com/sql/docs/instance-settings?hl=en#maintenance-window-2ndgen)\nwhen an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time. It supports:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The preferred compute engine\n[zone](https://cloud.google.com/compute/docs/zones?hl=en).",
      [],
      false,
      false,
    ),
  ];
}
