import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface clouddomains_RegistrationDnsSettingsCustomDnsDsRecord {
  // The algorithm used to generate the referenced DNSKEY.
  algorithm?: string;

  // The digest generated from the referenced DNSKEY.
  digest?: string;

  // The hash function used to generate the digest of the referenced DNSKEY.
  digestType?: string;

  // The key tag of the record. Must be set in range 0 -- 65535.
  keyTag?: number;
}

export function clouddomains_RegistrationDnsSettingsCustomDnsDsRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "The algorithm used to generate the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "digest",
      "The digest generated from the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "digestType",
      "The hash function used to generate the digest of the referenced DNSKEY.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "keyTag",
      "The key tag of the record. Must be set in range 0 -- 65535.",
      [],
      false,
      true,
    ),
  ];
}
