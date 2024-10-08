import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer {
  // The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  loadBalancerType?: string;

  // The fully qualified url of the network in which the load balancer belongs. This should be formatted like `projects/{project}/global/networks/{network}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  networkUrl?: string;

  // The configured port of the load balancer.
  port?: string;

  // The ID of the project in which the load balancer belongs.
  project?: string;

  // The region of the load balancer. Only needed for regional load balancers.
  region?: string;

  // The frontend IP address of the load balancer.
  ipAddress?: string;

  // The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  ipProtocol?: string;
}

export function dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'region',
      'The region of the load balancer. Only needed for regional load balancers.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      'The frontend IP address of the load balancer.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipProtocol',
      'The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'loadBalancerType',
      'The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkUrl',
      'The fully qualified url of the network in which the load balancer belongs. This should be formatted like `projects/{project}/global/networks/{network}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'port',
      'The configured port of the load balancer.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'project',
      'The ID of the project in which the load balancer belongs.',
      () => [],
      true,
      false,
    ),
  ];
}
