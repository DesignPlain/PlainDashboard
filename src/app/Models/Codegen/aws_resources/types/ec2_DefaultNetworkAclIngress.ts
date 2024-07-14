import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_DefaultNetworkAclIngress {
  // The CIDR block to match. This must be a valid network mask.
  cidrBlock?: string;

  /*
The IPv6 CIDR block.

> For more information on ICMP types and codes, see [Internet Control Message Protocol (ICMP) Parameters](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml).
*/
  ipv6CidrBlock?: string;

  /*
The to port to match.

The following arguments are optional:
*/
  toPort?: number;

  // The ICMP type to be used. Default 0.
  icmpType?: number;

  // The protocol to match. If using the -1 'all' protocol, you must specify a from and to port of 0.
  protocol?: string;

  // The rule number. Used for ordering.
  ruleNo?: number;

  // The action to take.
  action?: string;

  // The from port to match.
  fromPort?: number;

  // The ICMP type code to be used. Default 0.
  icmpCode?: number;
}

export function ec2_DefaultNetworkAclIngress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol to match. If using the -1 'all' protocol, you must specify a from and to port of 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "The action to take.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "The from port to match.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "The CIDR block to match. This must be a valid network mask.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "The to port to match.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "icmpType",
      "The ICMP type to be used. Default 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6CidrBlock",
      "The IPv6 CIDR block.\n\n> For more information on ICMP types and codes, see [Internet Control Message Protocol (ICMP) Parameters](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ruleNo",
      "The rule number. Used for ordering.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "icmpCode",
      "The ICMP type code to be used. Default 0.",
      [],
      false,
      false,
    ),
  ];
}
