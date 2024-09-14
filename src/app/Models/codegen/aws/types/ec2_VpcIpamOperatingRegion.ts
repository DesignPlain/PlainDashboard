import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_VpcIpamOperatingRegion {
  // The name of the Region you want to add to the IPAM.
  regionName?: string;
}

export function ec2_VpcIpamOperatingRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "The name of the Region you want to add to the IPAM.",
      () => [],
      true,
      false,
    ),
  ];
}
