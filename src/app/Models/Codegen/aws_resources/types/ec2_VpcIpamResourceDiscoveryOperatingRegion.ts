import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_VpcIpamResourceDiscoveryOperatingRegion {
  // The name of the Region you want to add to the IPAM.
  regionName?: string;
}

export function ec2_VpcIpamResourceDiscoveryOperatingRegion_GetTypes(): DynamicUIProps[] {
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
