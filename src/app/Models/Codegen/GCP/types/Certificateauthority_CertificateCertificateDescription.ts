import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionCertFingerprint,
  Certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionCertFingerprint";
import {
  Certificateauthority_CertificateCertificateDescriptionPublicKey,
  Certificateauthority_CertificateCertificateDescriptionPublicKey_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionPublicKey";
import {
  Certificateauthority_CertificateCertificateDescriptionSubjectDescription,
  Certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionSubjectDescription";
import {
  Certificateauthority_CertificateCertificateDescriptionSubjectKeyId,
  Certificateauthority_CertificateCertificateDescriptionSubjectKeyId_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionSubjectKeyId";
import {
  Certificateauthority_CertificateCertificateDescriptionX509Description,
  Certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509Description";
import {
  Certificateauthority_CertificateCertificateDescriptionAuthorityKeyId,
  Certificateauthority_CertificateCertificateDescriptionAuthorityKeyId_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionAuthorityKeyId";

export interface Certificateauthority_CertificateCertificateDescription {
  /*
(Output)
The hash of the x.509 certificate.
Structure is documented below.
*/
  CertFingerprints?: Array<Certificateauthority_CertificateCertificateDescriptionCertFingerprint>;

  /*
(Output)
Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
*/
  CrlDistributionPoints?: Array<string>;

  /*
A PublicKey describes a public key.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  PublicKeys?: Array<Certificateauthority_CertificateCertificateDescriptionPublicKey>;

  /*
(Output)
Describes some of the values in a certificate that are related to the subject and lifetime.
Structure is documented below.
*/
  SubjectDescriptions?: Array<Certificateauthority_CertificateCertificateDescriptionSubjectDescription>;

  /*
(Output)
Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.
Structure is documented below.
*/
  SubjectKeyIds?: Array<Certificateauthority_CertificateCertificateDescriptionSubjectKeyId>;

  /*
(Output)
A structured description of the issued X.509 certificate.
Structure is documented below.
*/
  X509Descriptions?: Array<Certificateauthority_CertificateCertificateDescriptionX509Description>;

  /*
(Output)
Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
*/
  AiaIssuingCertificateUrls?: Array<string>;

  /*
(Output)
Identifies the subjectKeyId of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1
Structure is documented below.
*/
  AuthorityKeyIds?: Array<Certificateauthority_CertificateCertificateDescriptionAuthorityKeyId>;
}

export function Certificateauthority_CertificateCertificateDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AuthorityKeyIds",
      "(Output)\nIdentifies the subjectKeyId of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionAuthorityKeyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CertFingerprints",
      "(Output)\nThe hash of the x.509 certificate.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionCertFingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CrlDistributionPoints",
      "(Output)\nDescribes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PublicKeys",
      'A PublicKey describes a public key.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      Certificateauthority_CertificateCertificateDescriptionPublicKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubjectDescriptions",
      "(Output)\nDescribes some of the values in a certificate that are related to the subject and lifetime.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubjectKeyIds",
      "(Output)\nProvides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionSubjectKeyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "X509Descriptions",
      "(Output)\nA structured description of the issued X.509 certificate.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509Description_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AiaIssuingCertificateUrls",
      '(Output)\nDescribes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
