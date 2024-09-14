import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getInstancePrivateDnsNameOption {
  // Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
  enableResourceNameDnsARecord?: boolean;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
  enableResourceNameDnsAaaaRecord?: boolean;

  // Type of hostname for EC2 instances.
  hostnameType?: string;
}

export function ec2_getInstancePrivateDnsNameOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsAaaaRecord",
      "Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostnameType",
      "Type of hostname for EC2 instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsARecord",
      "Indicates whether to respond to DNS queries for instance hostnames with DNS A records.",
      () => [],
      true,
      false,
    ),
  ];
}
