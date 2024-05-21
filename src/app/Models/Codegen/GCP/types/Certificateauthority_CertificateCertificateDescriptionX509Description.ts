import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension";

export interface certificateauthority_CertificateCertificateDescriptionX509Description {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  caOptions?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption>;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  keyUsages?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage>;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  nameConstraints?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint>;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  policyIds?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  additionalExtensions?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  aiaOcspServers?: Array<string>;
}

export function certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "caOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "keyUsages",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
