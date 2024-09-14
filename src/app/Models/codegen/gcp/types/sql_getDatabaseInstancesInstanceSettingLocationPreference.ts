import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstancesInstanceSettingLocationPreference {
  // A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  followGaeApplication?: string;

  // The preferred Compute Engine zone for the secondary/failover
  secondaryZone?: string;

  // To filter out the Cloud SQL instances which are located in the specified zone. This zone refers to the Compute Engine zone that the instance is currently serving from.
  zone?: string;
}

export function sql_getDatabaseInstancesInstanceSettingLocationPreference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "followGaeApplication",
      "A Google App Engine application whose zone to remain in. Must be in the same region as this instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryZone",
      "The preferred Compute Engine zone for the secondary/failover",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "To filter out the Cloud SQL instances which are located in the specified zone. This zone refers to the Compute Engine zone that the instance is currently serving from.",
      () => [],
      true,
      false,
    ),
  ];
}
