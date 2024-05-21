import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension,
  certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes,
} from "./certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension";
import {
  certificateauthority_CertificateTemplatePredefinedValuesCaOptions,
  certificateauthority_CertificateTemplatePredefinedValuesCaOptions_GetTypes,
} from "./certificateauthority_CertificateTemplatePredefinedValuesCaOptions";
import {
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsage,
  certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes,
} from "./certificateauthority_CertificateTemplatePredefinedValuesKeyUsage";
import {
  certificateauthority_CertificateTemplatePredefinedValuesPolicyId,
  certificateauthority_CertificateTemplatePredefinedValuesPolicyId_GetTypes,
} from "./certificateauthority_CertificateTemplatePredefinedValuesPolicyId";

export interface certificateauthority_CertificateTemplatePredefinedValues {
  // Optional. Describes custom X.509 extensions.
  additionalExtensions?: Array<certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension>;

  // Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  aiaOcspServers?: Array<string>;

  // Optional. Describes options in this X509Parameters that are relevant in a CA certificate.
  caOptions?: certificateauthority_CertificateTemplatePredefinedValuesCaOptions;

  // Optional. Indicates the intended use for keys that correspond to a certificate.
  keyUsage?: certificateauthority_CertificateTemplatePredefinedValuesKeyUsage;

  // Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  policyIds?: Array<certificateauthority_CertificateTemplatePredefinedValuesPolicyId>;
}

export function certificateauthority_CertificateTemplatePredefinedValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "policyIds",
      "Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.",
      certificateauthority_CertificateTemplatePredefinedValuesPolicyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Optional. Describes custom X.509 extensions.",
      certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaOcspServers",
      'Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "caOptions",
      "Optional. Describes options in this X509Parameters that are relevant in a CA certificate.",
      certificateauthority_CertificateTemplatePredefinedValuesCaOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "keyUsage",
      "Optional. Indicates the intended use for keys that correspond to a certificate.",
      certificateauthority_CertificateTemplatePredefinedValuesKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
