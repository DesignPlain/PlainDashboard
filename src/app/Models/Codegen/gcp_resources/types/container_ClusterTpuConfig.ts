import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterTpuConfig {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  ipv4CidrBlock?: string;

  // Whether to use service networking for Cloud TPU or not
  useServiceNetworking?: boolean;
}

export function container_ClusterTpuConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv4CidrBlock",
      "IPv4 CIDR block reserved for Cloud TPU in the VPC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useServiceNetworking",
      "Whether to use service networking for Cloud TPU or not",
      [],
      false,
      true,
    ),
  ];
}
