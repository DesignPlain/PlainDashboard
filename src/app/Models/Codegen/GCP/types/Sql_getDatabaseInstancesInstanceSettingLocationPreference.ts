import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingLocationPreference {
  // A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  FollowGaeApplication?: string;

  // The preferred Compute Engine zone for the secondary/failover
  SecondaryZone?: string;

  // To filter out the Cloud SQL instances which are located in the specified zone. This zone refers to the Compute Engine zone that the instance is currently serving from.
  Zone?: string;
}

export function Sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes(): DynamicUIProps[] {
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
      "To filter out the Cloud SQL instances which are located in the specified zone. This zone refers to the Compute Engine zone that the instance is currently serving from.",
      [],
      true,
      false,
    ),
  ];
}
