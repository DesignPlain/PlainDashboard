import { getAuthorityConfigX509ConfigPolicyId } from "./getAuthorityConfigX509ConfigPolicyId";
import { getAuthorityConfigX509ConfigAdditionalExtension } from "./getAuthorityConfigX509ConfigAdditionalExtension";
import { getAuthorityConfigX509ConfigCaOption } from "./getAuthorityConfigX509ConfigCaOption";
import { getAuthorityConfigX509ConfigKeyUsage } from "./getAuthorityConfigX509ConfigKeyUsage";
import { getAuthorityConfigX509ConfigNameConstraint } from "./getAuthorityConfigX509ConfigNameConstraint";

export interface getAuthorityConfigX509Config {
  // Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
  AdditionalExtensions?: Array<getAuthorityConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  // Describes values that are relevant in a CA certificate.
  CaOptions?: Array<getAuthorityConfigX509ConfigCaOption>;

  // Indicates the intended use for keys that correspond to a certificate.
  KeyUsages?: Array<getAuthorityConfigX509ConfigKeyUsage>;

  // Describes the X.509 name constraints extension.
  NameConstraints?: Array<getAuthorityConfigX509ConfigNameConstraint>;

  // Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  PolicyIds?: Array<getAuthorityConfigX509ConfigPolicyId>;
}
