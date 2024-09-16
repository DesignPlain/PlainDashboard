import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_LoadBalancerSubnetMapping {
  // IPv6 address. You associate IPv6 CIDR blocks with your VPC and choose the subnets where you launch both internet-facing and internal Application Load Balancers or Network Load Balancers.
  ipv6Address?: string;

  //
  outpostId?: string;

  // Private IPv4 address for an internal load balancer.
  privateIpv4Address?: string;

  // ID of the subnet of which to attach to the load balancer. You can specify only one subnet per Availability Zone.
  subnetId?: string;

  // Allocation ID of the Elastic IP address for an internet-facing load balancer.
  allocationId?: string;
}

export function alb_LoadBalancerSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipv6Address',
      'IPv6 address. You associate IPv6 CIDR blocks with your VPC and choose the subnets where you launch both internet-facing and internal Application Load Balancers or Network Load Balancers.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outpostId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateIpv4Address',
      'Private IPv4 address for an internal load balancer.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetId',
      'ID of the subnet of which to attach to the load balancer. You can specify only one subnet per Availability Zone.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'allocationId',
      'Allocation ID of the Elastic IP address for an internet-facing load balancer.',
      () => [],
      false,
      false,
    ),
  ];
}
