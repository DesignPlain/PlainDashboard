import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificateauthority_AuthorityConfigSubjectConfigSubjectAltName {
  // Contains only valid RFC 2822 E-mail addresses.
  emailAddresses?: Array<string>;

  // Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  ipAddresses?: Array<string>;

  // Contains only valid RFC 3986 URIs.
  uris?: Array<string>;

  // Contains only valid, fully-qualified host names.
  dnsNames?: Array<string>;
}

export function certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "emailAddresses",
      "Contains only valid RFC 2822 E-mail addresses.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "uris",
      "Contains only valid RFC 3986 URIs.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsNames",
      "Contains only valid, fully-qualified host names.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
