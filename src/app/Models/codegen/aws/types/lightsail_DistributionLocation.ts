import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lightsail_DistributionLocation {
  // The Availability Zone. Follows the format us-east-2a (case-sensitive).
  availabilityZone?: string;

  // The AWS Region name.
  regionName?: string;
}

export function lightsail_DistributionLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone. Follows the format us-east-2a (case-sensitive).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "The AWS Region name.",
      () => [],
      true,
      false,
    ),
  ];
}
