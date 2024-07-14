import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_InstancePublicPortsPortInfo {
  // IP protocol name. Valid values are `tcp`, `all`, `udp`, and `icmp`.
  protocol?: string;

  /*
Last port in a range of open ports on an instance.

The following arguments are optional:
*/
  toPort?: number;

  // Set of CIDR aliases that define access for a preconfigured range of IP addresses.
  cidrListAliases?: Array<string>;

  // Set of CIDR blocks.
  cidrs?: Array<string>;

  // First port in a range of open ports on an instance.
  fromPort?: number;

  //
  ipv6Cidrs?: Array<string>;
}

export function lightsail_InstancePublicPortsPortInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "IP protocol name. Valid values are `tcp`, `all`, `udp`, and `icmp`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "Last port in a range of open ports on an instance.\n\nThe following arguments are optional:",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrListAliases",
      "Set of CIDR aliases that define access for a preconfigured range of IP addresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrs",
      "Set of CIDR blocks.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "First port in a range of open ports on an instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv6Cidrs",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
