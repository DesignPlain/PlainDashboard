import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer {
  // The ID of the project in which the load balancer belongs.
  Project?: string;

  // The region of the load balancer. Only needed for regional load balancers.
  Region?: string;

  // The frontend IP address of the load balancer.
  IpAddress?: string;

  // The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  IpProtocol?: string;

  // The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  LoadBalancerType?: string;

  // The fully qualified url of the network in which the load balancer belongs. This should be formatted like `projects/{project}/global/networks/{network}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  NetworkUrl?: string;

  // The configured port of the load balancer.
  Port?: string;
}

export function Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LoadBalancerType",
      'The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkUrl",
      "The fully qualified url of the network in which the load balancer belongs. This should be formatted like `projects/{project}/global/networks/{network}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Port",
      "The configured port of the load balancer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project in which the load balancer belongs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Region",
      "The region of the load balancer. Only needed for regional load balancers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "The frontend IP address of the load balancer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpProtocol",
      'The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]',
      [],
      true,
      false,
    ),
  ];
}
