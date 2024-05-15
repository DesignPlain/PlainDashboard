import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork {
  /*
The [RFC 3339](https://tools.ietf.org/html/rfc3339)
formatted date time string indicating when this whitelist expires.
*/
  ExpirationTime?: string;

  // A name for this whitelist entry.
  Name?: string;

  /*
A CIDR notation IPv4 or IPv6 address that is allowed to
access this instance. Must be set even if other two attributes are not for
the whitelist to become active.
*/
  Value?: string;
}

export function Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "The [RFC 3339](https://tools.ietf.org/html/rfc3339)\nformatted date time string indicating when this whitelist expires.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "A name for this whitelist entry.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "A CIDR notation IPv4 or IPv6 address that is allowed to\naccess this instance. Must be set even if other two attributes are not for\nthe whitelist to become active.",
      [],
      true,
      false,
    ),
  ];
}
