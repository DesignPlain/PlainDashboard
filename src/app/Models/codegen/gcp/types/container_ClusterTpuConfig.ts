import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      'enabled',
      'Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv4CidrBlock',
      'IPv4 CIDR block reserved for Cloud TPU in the VPC.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useServiceNetworking',
      'Whether to use service networking for Cloud TPU or not',
      () => [],
      false,
      true,
    ),
  ];
}
