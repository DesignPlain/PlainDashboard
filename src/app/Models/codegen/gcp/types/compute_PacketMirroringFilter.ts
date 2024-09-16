import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_PacketMirroringFilter {
  /*
IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported.
*/
  cidrRanges?: Array<string>;

  /*
Direction of traffic to mirror.
Default value is `BOTH`.
Possible values are: `INGRESS`, `EGRESS`, `BOTH`.
*/
  direction?: string;

  // Possible IP protocols including tcp, udp, icmp and esp
  ipProtocols?: Array<string>;
}

export function compute_PacketMirroringFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'direction',
      'Direction of traffic to mirror.\nDefault value is `BOTH`.\nPossible values are: `INGRESS`, `EGRESS`, `BOTH`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipProtocols',
      'Possible IP protocols including tcp, udp, icmp and esp',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cidrRanges',
      'IP CIDR ranges that apply as a filter on the source (ingress) or\ndestination (egress) IP in the IP header. Only IPv4 is supported.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
