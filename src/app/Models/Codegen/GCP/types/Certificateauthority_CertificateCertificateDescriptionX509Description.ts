import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId";

export interface Certificateauthority_CertificateCertificateDescriptionX509Description {
  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption>;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsages?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage>;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint>;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId>;
}

export function Certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CaOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KeyUsages",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionPolicyId_GetTypes(),
      false,
      false,
    ),
  ];
}
