import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterTpuConfig {
  // Whether Cloud TPU integration is enabled or not
  enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  ipv4CidrBlock?: string;

  // Whether to use service networking for Cloud TPU or not
  useServiceNetworking?: boolean;
}

export function container_getClusterTpuConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipv4CidrBlock',
      'IPv4 CIDR block reserved for Cloud TPU in the VPC.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useServiceNetworking',
      'Whether to use service networking for Cloud TPU or not',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether Cloud TPU integration is enabled or not',
      () => [],
      true,
      false,
    ),
  ];
}
