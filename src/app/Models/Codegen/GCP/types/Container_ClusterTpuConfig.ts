import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterTpuConfig {
  // Whether to use service networking for Cloud TPU or not
  UseServiceNetworking?: boolean;

  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  Enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  Ipv4CidrBlock?: string;
}

export function Container_ClusterTpuConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "UseServiceNetworking",
      "Whether to use service networking for Cloud TPU or not",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv4CidrBlock",
      "IPv4 CIDR block reserved for Cloud TPU in the VPC.",
      [],
      false,
      false,
    ),
  ];
}
