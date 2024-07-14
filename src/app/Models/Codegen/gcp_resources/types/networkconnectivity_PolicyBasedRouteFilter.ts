import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_PolicyBasedRouteFilter {
  /*
The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.

- - -
*/
  destRange?: string;

  // The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.
  ipProtocol?: string;

  /*
Internet protocol versions this policy-based route applies to.
Possible values are: `IPV4`.
*/
  protocolVersion?: string;

  // The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.
  srcRange?: string;
}

export function networkconnectivity_PolicyBasedRouteFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "srcRange",
      'The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "destRange",
      'The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.\n\n- - -',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipProtocol",
      "The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocolVersion",
      "Internet protocol versions this policy-based route applies to.\nPossible values are: `IPV4`.",
      [],
      true,
      true,
    ),
  ];
}
