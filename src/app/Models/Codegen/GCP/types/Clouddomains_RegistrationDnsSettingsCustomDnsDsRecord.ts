import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord {
  // The algorithm used to generate the referenced DNSKEY.
  Algorithm?: string;

  // The digest generated from the referenced DNSKEY.
  Digest?: string;

  // The hash function used to generate the digest of the referenced DNSKEY.
  DigestType?: string;

  // The key tag of the record. Must be set in range 0 -- 65535.
  KeyTag?: number;
}

export function Clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Algorithm",
      "The algorithm used to generate the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Digest",
      "The digest generated from the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DigestType",
      "The hash function used to generate the digest of the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "KeyTag",
      "The key tag of the record. Must be set in range 0 -- 65535.",
      [],
      false,
      true,
    ),
  ];
}
