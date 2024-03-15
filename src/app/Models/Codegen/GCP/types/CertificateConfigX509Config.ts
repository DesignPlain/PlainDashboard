import { CertificateConfigX509ConfigKeyUsage } from "./CertificateConfigX509ConfigKeyUsage";
import { CertificateConfigX509ConfigNameConstraints } from "./CertificateConfigX509ConfigNameConstraints";
import { CertificateConfigX509ConfigPolicyId } from "./CertificateConfigX509ConfigPolicyId";
import { CertificateConfigX509ConfigAdditionalExtension } from "./CertificateConfigX509ConfigAdditionalExtension";
import { CertificateConfigX509ConfigCaOptions } from "./CertificateConfigX509ConfigCaOptions";

export interface CertificateConfigX509Config {
  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: CertificateConfigX509ConfigNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<CertificateConfigX509ConfigPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<CertificateConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: CertificateConfigX509ConfigCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsage?: CertificateConfigX509ConfigKeyUsage;
}
