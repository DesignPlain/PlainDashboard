import { CertificateCertificateDescriptionSubjectDescription } from "./CertificateCertificateDescriptionSubjectDescription";
import { CertificateCertificateDescriptionSubjectKeyId } from "./CertificateCertificateDescriptionSubjectKeyId";
import { CertificateCertificateDescriptionX509Description } from "./CertificateCertificateDescriptionX509Description";
import { CertificateCertificateDescriptionAuthorityKeyId } from "./CertificateCertificateDescriptionAuthorityKeyId";
import { CertificateCertificateDescriptionCertFingerprint } from "./CertificateCertificateDescriptionCertFingerprint";
import { CertificateCertificateDescriptionPublicKey } from "./CertificateCertificateDescriptionPublicKey";

export interface CertificateCertificateDescription {
  /*
(Output)
The hash of the x.509 certificate.
Structure is documented below.
*/
  CertFingerprints?: Array<CertificateCertificateDescriptionCertFingerprint>;

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
  PublicKeys?: Array<CertificateCertificateDescriptionPublicKey>;

  /*
(Output)
Describes some of the values in a certificate that are related to the subject and lifetime.
Structure is documented below.
*/
  SubjectDescriptions?: Array<CertificateCertificateDescriptionSubjectDescription>;

  /*
(Output)
Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.
Structure is documented below.
*/
  SubjectKeyIds?: Array<CertificateCertificateDescriptionSubjectKeyId>;

  /*
(Output)
A structured description of the issued X.509 certificate.
Structure is documented below.
*/
  X509Descriptions?: Array<CertificateCertificateDescriptionX509Description>;

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
  AuthorityKeyIds?: Array<CertificateCertificateDescriptionAuthorityKeyId>;
}
