import { CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId } from "./CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId";

export interface CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSan {
  /*
(Output)
Describes how some of the technical fields in a certificate should be populated.
Structure is documented below.
*/
  ObectIds?: Array<CertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSanObectId>;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;

  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;
}
