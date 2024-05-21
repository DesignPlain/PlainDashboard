import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateCertificateDescriptionSubjectKeyId,
  certificateauthority_CertificateCertificateDescriptionSubjectKeyId_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionSubjectKeyId";
import {
  certificateauthority_CertificateCertificateDescriptionX509Description,
  certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509Description";
import {
  certificateauthority_CertificateCertificateDescriptionAuthorityKeyId,
  certificateauthority_CertificateCertificateDescriptionAuthorityKeyId_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionAuthorityKeyId";
import {
  certificateauthority_CertificateCertificateDescriptionCertFingerprint,
  certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionCertFingerprint";
import {
  certificateauthority_CertificateCertificateDescriptionPublicKey,
  certificateauthority_CertificateCertificateDescriptionPublicKey_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionPublicKey";
import {
  certificateauthority_CertificateCertificateDescriptionSubjectDescription,
  certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionSubjectDescription";

export interface certificateauthority_CertificateCertificateDescription {
  /*
(Output)
Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.
Structure is documented below.
*/
  subjectKeyIds?: Array<certificateauthority_CertificateCertificateDescriptionSubjectKeyId>;

  /*
(Output)
A structured description of the issued X.509 certificate.
Structure is documented below.
*/
  x509Descriptions?: Array<certificateauthority_CertificateCertificateDescriptionX509Description>;

  /*
(Output)
Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
*/
  aiaIssuingCertificateUrls?: Array<string>;

  /*
(Output)
Identifies the subjectKeyId of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1
Structure is documented below.
*/
  authorityKeyIds?: Array<certificateauthority_CertificateCertificateDescriptionAuthorityKeyId>;

  /*
(Output)
The hash of the x.509 certificate.
Structure is documented below.
*/
  certFingerprints?: Array<certificateauthority_CertificateCertificateDescriptionCertFingerprint>;

  /*
(Output)
Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
*/
  crlDistributionPoints?: Array<string>;

  /*
A PublicKey describes a public key.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  publicKeys?: Array<certificateauthority_CertificateCertificateDescriptionPublicKey>;

  /*
(Output)
Describes some of the values in a certificate that are related to the subject and lifetime.
Structure is documented below.
*/
  subjectDescriptions?: Array<certificateauthority_CertificateCertificateDescriptionSubjectDescription>;
}

export function certificateauthority_CertificateCertificateDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "x509Descriptions",
      "(Output)\nA structured description of the issued X.509 certificate.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaIssuingCertificateUrls",
      '(Output)\nDescribes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "authorityKeyIds",
      "(Output)\nIdentifies the subjectKeyId of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionAuthorityKeyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "certFingerprints",
      "(Output)\nThe hash of the x.509 certificate.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "crlDistributionPoints",
      "(Output)\nDescribes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "publicKeys",
      'A PublicKey describes a public key.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      certificateauthority_CertificateCertificateDescriptionPublicKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subjectDescriptions",
      "(Output)\nDescribes some of the values in a certificate that are related to the subject and lifetime.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subjectKeyIds",
      "(Output)\nProvides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionSubjectKeyId_GetTypes(),
      false,
      false,
    ),
  ];
}
