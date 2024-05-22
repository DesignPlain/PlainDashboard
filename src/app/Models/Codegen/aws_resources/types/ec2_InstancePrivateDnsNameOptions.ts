import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_InstancePrivateDnsNameOptions {
  // Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
  enableResourceNameDnsARecord?: boolean;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
  enableResourceNameDnsAaaaRecord?: boolean;

  // Type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name` and `resource-name`.
  hostnameType?: string;
}

export function ec2_InstancePrivateDnsNameOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsARecord",
      "Indicates whether to respond to DNS queries for instance hostnames with DNS A records.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsAaaaRecord",
      "Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostnameType",
      "Type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name` and `resource-name`.",
      [],
      false,
      false,
    ),
  ];
}
