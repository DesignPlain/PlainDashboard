import { CaPoolIssuancePolicyBaselineValuesCaOptions } from "./CaPoolIssuancePolicyBaselineValuesCaOptions";
import { CaPoolIssuancePolicyBaselineValuesKeyUsage } from "./CaPoolIssuancePolicyBaselineValuesKeyUsage";
import { CaPoolIssuancePolicyBaselineValuesNameConstraints } from "./CaPoolIssuancePolicyBaselineValuesNameConstraints";
import { CaPoolIssuancePolicyBaselineValuesPolicyId } from "./CaPoolIssuancePolicyBaselineValuesPolicyId";
import { CaPoolIssuancePolicyBaselineValuesAdditionalExtension } from "./CaPoolIssuancePolicyBaselineValuesAdditionalExtension";

export interface CaPoolIssuancePolicyBaselineValues {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: CaPoolIssuancePolicyBaselineValuesCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsage?: CaPoolIssuancePolicyBaselineValuesKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: CaPoolIssuancePolicyBaselineValuesNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<CaPoolIssuancePolicyBaselineValuesPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<CaPoolIssuancePolicyBaselineValuesAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;
}
