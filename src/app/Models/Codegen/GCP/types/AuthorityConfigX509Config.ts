import { AuthorityConfigX509ConfigKeyUsage } from "./AuthorityConfigX509ConfigKeyUsage";
import { AuthorityConfigX509ConfigNameConstraints } from "./AuthorityConfigX509ConfigNameConstraints";
import { AuthorityConfigX509ConfigPolicyId } from "./AuthorityConfigX509ConfigPolicyId";
import { AuthorityConfigX509ConfigAdditionalExtension } from "./AuthorityConfigX509ConfigAdditionalExtension";
import { AuthorityConfigX509ConfigCaOptions } from "./AuthorityConfigX509ConfigCaOptions";

export interface AuthorityConfigX509Config {
  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: AuthorityConfigX509ConfigCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsage?: AuthorityConfigX509ConfigKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: AuthorityConfigX509ConfigNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<AuthorityConfigX509ConfigPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<AuthorityConfigX509ConfigAdditionalExtension>;
}
