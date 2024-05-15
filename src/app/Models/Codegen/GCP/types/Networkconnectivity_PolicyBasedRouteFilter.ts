import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_PolicyBasedRouteFilter {
  // The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.
  SrcRange?: string;

  /*
The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.

- - -
*/
  DestRange?: string;

  // The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.
  IpProtocol?: string;

  /*
Internet protocol versions this policy-based route applies to.
Possible values are: `IPV4`.
*/
  ProtocolVersion?: string;
}

export function Networkconnectivity_PolicyBasedRouteFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SrcRange",
      'The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DestRange",
      'The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.\n\n- - -',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpProtocol",
      "The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProtocolVersion",
      "Internet protocol versions this policy-based route applies to.\nPossible values are: `IPV4`.",
      [],
      true,
      true,
    ),
  ];
}
