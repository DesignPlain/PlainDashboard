import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_DistributionLocation {
  // The AWS Region name of the origin resource.
  regionName?: string;

  // The Availability Zone. Follows the format us-east-2a (case-sensitive).
  availabilityZone?: string;
}

export function lightsail_DistributionLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "The AWS Region name of the origin resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone. Follows the format us-east-2a (case-sensitive).",
      [],
      true,
      false,
    ),
  ];
}
