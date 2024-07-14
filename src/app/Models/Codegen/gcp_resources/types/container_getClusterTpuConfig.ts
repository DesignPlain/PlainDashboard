import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterTpuConfig {
  // Whether to use service networking for Cloud TPU or not
  useServiceNetworking?: boolean;

  // Whether Cloud TPU integration is enabled or not
  enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  ipv4CidrBlock?: string;
}

export function container_getClusterTpuConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "useServiceNetworking",
      "Whether to use service networking for Cloud TPU or not",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Cloud TPU integration is enabled or not",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv4CidrBlock",
      "IPv4 CIDR block reserved for Cloud TPU in the VPC.",
      [],
      true,
      false,
    ),
  ];
}
