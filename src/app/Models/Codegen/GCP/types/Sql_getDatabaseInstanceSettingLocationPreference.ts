import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingLocationPreference {
  // A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  FollowGaeApplication?: string;

  // The preferred Compute Engine zone for the secondary/failover
  SecondaryZone?: string;

  // The preferred compute engine zone.
  Zone?: string;
}

export function Sql_getDatabaseInstanceSettingLocationPreference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FollowGaeApplication",
      "A Google App Engine application whose zone to remain in. Must be in the same region as this instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecondaryZone",
      "The preferred Compute Engine zone for the secondary/failover",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The preferred compute engine zone.",
      [],
      true,
      false,
    ),
  ];
}
