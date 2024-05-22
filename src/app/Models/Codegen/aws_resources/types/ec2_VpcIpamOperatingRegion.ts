import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
