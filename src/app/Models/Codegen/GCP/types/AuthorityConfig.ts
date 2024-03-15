import { AuthorityConfigX509Config } from "./AuthorityConfigX509Config";
import { AuthorityConfigSubjectConfig } from "./AuthorityConfigSubjectConfig";

export interface AuthorityConfig {
  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  SubjectConfig?: AuthorityConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  X509Config?: AuthorityConfigX509Config;
}
