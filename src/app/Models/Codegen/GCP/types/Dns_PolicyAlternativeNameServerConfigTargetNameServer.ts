import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_PolicyAlternativeNameServerConfigTargetNameServer {
  // IPv4 address to forward to.
  Ipv4Address?: string;

  /*
Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target
Possible values are: `default`, `private`.
*/
  ForwardingPath?: string;
}

export function Dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Ipv4Address",
      "IPv4 address to forward to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ForwardingPath",
      "Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding\ndecision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go\nto the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target\nPossible values are: `default`, `private`.",
      [],
      false,
      false,
    ),
  ];
}
