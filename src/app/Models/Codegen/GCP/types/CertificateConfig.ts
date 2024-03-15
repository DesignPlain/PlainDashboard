import { CertificateConfigPublicKey } from "./CertificateConfigPublicKey";
import { CertificateConfigSubjectConfig } from "./CertificateConfigSubjectConfig";
import { CertificateConfigX509Config } from "./CertificateConfigX509Config";

export interface CertificateConfig {
  /*
A PublicKey describes a public key.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  PublicKey?: CertificateConfigPublicKey;

  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.
*/
  SubjectConfig?: CertificateConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  X509Config?: CertificateConfigX509Config;
}
