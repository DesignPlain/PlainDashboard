import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Filestore_getInstanceNetwork {
  /*
The name of the GCE VPC network to which the
instance is connected.
*/
  Network?: string;

  /*
A /29 CIDR block that identifies the range of IP
addresses reserved for this instance.
*/
  ReservedIpRange?: string;

  /*
The network connect mode of the Filestore instance.
If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
*/
  ConnectMode?: string;

  // A list of IPv4 or IPv6 addresses.
  IpAddresses?: Array<string>;

  /*
IP versions for which the instance has
IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]
*/
  Modes?: Array<string>;
}

export function Filestore_getInstanceNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The name of the GCE VPC network to which the\ninstance is connected.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReservedIpRange",
      "A /29 CIDR block that identifies the range of IP\naddresses reserved for this instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectMode",
      'The network connect mode of the Filestore instance.\nIf not provided, the connect mode defaults to\nDIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpAddresses",
      "A list of IPv4 or IPv6 addresses.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Modes",
      'IP versions for which the instance has\nIP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
