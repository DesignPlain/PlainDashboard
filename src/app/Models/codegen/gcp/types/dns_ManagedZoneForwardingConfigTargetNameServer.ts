import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dns_ManagedZoneForwardingConfigTargetNameServer {
  /*
Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target
Possible values are: `default`, `private`.
*/
  forwardingPath?: string;

  // IPv4 address of a target name server.
  ipv4Address?: string;
}

export function dns_ManagedZoneForwardingConfigTargetNameServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'forwardingPath',
      'Forwarding path for this TargetNameServer. If unset or `default` Cloud DNS will make forwarding\ndecision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go\nto the Internet. When set to `private`, Cloud DNS will always send queries through VPC for this target\nPossible values are: `default`, `private`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv4Address',
      'IPv4 address of a target name server.',
      () => [],
      true,
      false,
    ),
  ];
}
