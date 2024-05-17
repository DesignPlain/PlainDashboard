import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName {
  // Contains only valid, fully-qualified host names.
  DnsNames?: Array<string>;

  // Contains only valid RFC 2822 E-mail addresses.
  EmailAddresses?: Array<string>;

  // Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  IpAddresses?: Array<string>;

  // Contains only valid RFC 3986 URIs.
  Uris?: Array<string>;
}

export function Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Uris",
      "Contains only valid RFC 3986 URIs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DnsNames",
      "Contains only valid, fully-qualified host names.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EmailAddresses",
      "Contains only valid RFC 2822 E-mail addresses.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpAddresses",
      "Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
