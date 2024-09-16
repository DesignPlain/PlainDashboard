import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_getClusterKubernetesNetworkConfig {
  // `ipv4` or `ipv6`.
  ipFamily?: string;

  // The CIDR block to assign Kubernetes pod and service IP addresses from if `ipv4` was specified when the cluster was created.
  serviceIpv4Cidr?: string;

  // The CIDR block to assign Kubernetes pod and service IP addresses from if `ipv6` was specified when the cluster was created. Kubernetes assigns service addresses from the unique local address range (fc00::/7) because you can't specify a custom IPv6 CIDR block when you create the cluster.
  serviceIpv6Cidr?: string;
}

export function eks_getClusterKubernetesNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipFamily',
      '`ipv4` or `ipv6`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceIpv4Cidr',
      'The CIDR block to assign Kubernetes pod and service IP addresses from if `ipv4` was specified when the cluster was created.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceIpv6Cidr',
      "The CIDR block to assign Kubernetes pod and service IP addresses from if `ipv6` was specified when the cluster was created. Kubernetes assigns service addresses from the unique local address range (fc00::/7) because you can't specify a custom IPv6 CIDR block when you create the cluster.",
      () => [],
      true,
      false,
    ),
  ];
}
