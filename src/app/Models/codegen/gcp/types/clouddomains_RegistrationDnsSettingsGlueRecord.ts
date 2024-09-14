import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddomains_RegistrationDnsSettingsGlueRecord {
  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  ipv6Addresses?: Array<string>;

  // Required. Domain name of the host in Punycode format.
  hostName?: string;

  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  ipv4Addresses?: Array<string>;
}

export function clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipv6Addresses",
      "List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).\nAt least one of ipv4_address and ipv6_address must be set.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostName",
      "Required. Domain name of the host in Punycode format.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipv4Addresses",
      "List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).\nAt least one of ipv4_address and ipv6_address must be set.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
