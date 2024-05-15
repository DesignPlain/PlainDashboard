import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterTpuConfig {
  // Whether to use service networking for Cloud TPU or not
  UseServiceNetworking?: boolean;

  // Whether Cloud TPU integration is enabled or not
  Enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  Ipv4CidrBlock?: string;
}

export function Container_getClusterTpuConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "UseServiceNetworking",
      "Whether to use service networking for Cloud TPU or not",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether Cloud TPU integration is enabled or not",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv4CidrBlock",
      "IPv4 CIDR block reserved for Cloud TPU in the VPC.",
      [],
      true,
      false,
    ),
  ];
}
