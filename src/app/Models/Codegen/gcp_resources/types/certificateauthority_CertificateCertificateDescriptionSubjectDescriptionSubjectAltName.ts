import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan,
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan";

export interface certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName {
  /*
(Output)
Contains additional subject alternative name values.
Structure is documented below.
*/
  customSans?: Array<certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan>;

  // Contains only valid, fully-qualified host names.
  dnsNames?: Array<string>;

  // Contains only valid RFC 2822 E-mail addresses.
  emailAddresses?: Array<string>;

  // Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  ipAddresses?: Array<string>;

  // Contains only valid RFC 3986 URIs.
  uris?: Array<string>;
}

export function certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customSans",
      "(Output)\nContains additional subject alternative name values.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsNames",
      "Contains only valid, fully-qualified host names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "emailAddresses",
      "Contains only valid RFC 2822 E-mail addresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "uris",
      "Contains only valid RFC 3986 URIs.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
