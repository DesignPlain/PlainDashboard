import { CertificateCertificateDescriptionSubjectDescriptionSubjectAltName } from "./CertificateCertificateDescriptionSubjectDescriptionSubjectAltName";
import { CertificateCertificateDescriptionSubjectDescriptionSubject } from "./CertificateCertificateDescriptionSubjectDescriptionSubject";

export interface CertificateCertificateDescriptionSubjectDescription {
  /*
(Output)
The serial number encoded in lowercase hexadecimal.
*/
  HexSerialNumber?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  Lifetime?: string;

  /*
(Output)
The time at which the certificate expires.
*/
  NotAfterTime?: string;

  /*
(Output)
The time at which the certificate becomes valid.
*/
  NotBeforeTime?: string;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltNames?: Array<CertificateCertificateDescriptionSubjectDescriptionSubjectAltName>;

  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subjects?: Array<CertificateCertificateDescriptionSubjectDescriptionSubject>;
}
