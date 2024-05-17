import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddomains_RegistrationDnsSettingsGlueRecord {
  // Required. Domain name of the host in Punycode format.
  HostName?: string;

  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  Ipv4Addresses?: Array<string>;

  /*
List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
At least one of ipv4_address and ipv6_address must be set.
*/
  Ipv6Addresses?: Array<string>;
}

export function Clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HostName",
      "Required. Domain name of the host in Punycode format.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ipv4Addresses",
      "List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).\nAt least one of ipv4_address and ipv6_address must be set.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ipv6Addresses",
      "List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).\nAt least one of ipv4_address and ipv6_address must be set.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
