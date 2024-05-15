import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_PacketMirroringFilter {
  /*
IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported.
*/
  CidrRanges?: Array<string>;

  /*
Direction of traffic to mirror.
Default value is `BOTH`.
Possible values are: `INGRESS`, `EGRESS`, `BOTH`.
*/
  Direction?: string;

  // Possible IP protocols including tcp, udp, icmp and esp
  IpProtocols?: Array<string>;
}

export function Compute_PacketMirroringFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CidrRanges",
      "IP CIDR ranges that apply as a filter on the source (ingress) or\ndestination (egress) IP in the IP header. Only IPv4 is supported.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Direction",
      "Direction of traffic to mirror.\nDefault value is `BOTH`.\nPossible values are: `INGRESS`, `EGRESS`, `BOTH`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpProtocols",
      "Possible IP protocols including tcp, udp, icmp and esp",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
