import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dns_PolicyAlternativeNameServerConfigTargetNameServer {
  /*
Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target
Possible values are: `default`, `private`.
*/
  forwardingPath?: string;

  // IPv4 address to forward to.
  ipv4Address?: string;
}

export function dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "forwardingPath",
      "Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding\ndecision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go\nto the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target\nPossible values are: `default`, `private`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv4Address",
      "IPv4 address to forward to.",
      [],
      true,
      false,
    ),
  ];
}
