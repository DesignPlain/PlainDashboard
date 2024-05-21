import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface filestore_getInstanceNetwork {
  /*
A /29 CIDR block that identifies the range of IP
addresses reserved for this instance.
*/
  reservedIpRange?: string;

  /*
The network connect mode of the Filestore instance.
If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
*/
  connectMode?: string;

  // A list of IPv4 or IPv6 addresses.
  ipAddresses?: Array<string>;

  /*
IP versions for which the instance has
IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]
*/
  modes?: Array<string>;

  /*
The name of the GCE VPC network to which the
instance is connected.
*/
  network?: string;
}

export function filestore_getInstanceNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "reservedIpRange",
      "A /29 CIDR block that identifies the range of IP\naddresses reserved for this instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectMode",
      'The network connect mode of the Filestore instance.\nIf not provided, the connect mode defaults to\nDIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "A list of IPv4 or IPv6 addresses.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "modes",
      'IP versions for which the instance has\nIP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The name of the GCE VPC network to which the\ninstance is connected.",
      [],
      true,
      false,
    ),
  ];
}
