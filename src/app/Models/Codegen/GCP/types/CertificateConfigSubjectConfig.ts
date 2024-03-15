import { CertificateConfigSubjectConfigSubject } from "./CertificateConfigSubjectConfigSubject";
import { CertificateConfigSubjectConfigSubjectAltName } from "./CertificateConfigSubjectConfigSubjectAltName";

export interface CertificateConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subject?: CertificateConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltName?: CertificateConfigSubjectConfigSubjectAltName;
}
