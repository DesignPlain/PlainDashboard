import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension,
  Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesCaOptions,
  Certificateauthority_CertificateTemplatePredefinedValuesCaOptions_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesCaOptions";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage,
  Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesPolicyId,
  Certificateauthority_CertificateTemplatePredefinedValuesPolicyId_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesPolicyId";

export interface Certificateauthority_CertificateTemplatePredefinedValues {
  // Optional. Describes custom X.509 extensions.
  AdditionalExtensions?: Array<Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension>;

  // Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  AiaOcspServers?: Array<string>;

  // Optional. Describes options in this X509Parameters that are relevant in a CA certificate.
  CaOptions?: Certificateauthority_CertificateTemplatePredefinedValuesCaOptions;

  // Optional. Indicates the intended use for keys that correspond to a certificate.
  KeyUsage?: Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage;

  // Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  PolicyIds?: Array<Certificateauthority_CertificateTemplatePredefinedValuesPolicyId>;
}

export function Certificateauthority_CertificateTemplatePredefinedValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KeyUsage",
      "Optional. Indicates the intended use for keys that correspond to a certificate.",
      Certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyIds",
      "Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.",
      Certificateauthority_CertificateTemplatePredefinedValuesPolicyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Optional. Describes custom X.509 extensions.",
      Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AiaOcspServers",
      'Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CaOptions",
      "Optional. Describes options in this X509Parameters that are relevant in a CA certificate.",
      Certificateauthority_CertificateTemplatePredefinedValuesCaOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
