import { CaPoolIssuancePolicyIdentityConstraints } from "./CaPoolIssuancePolicyIdentityConstraints";
import { CaPoolIssuancePolicyAllowedIssuanceModes } from "./CaPoolIssuancePolicyAllowedIssuanceModes";
import { CaPoolIssuancePolicyAllowedKeyType } from "./CaPoolIssuancePolicyAllowedKeyType";
import { CaPoolIssuancePolicyBaselineValues } from "./CaPoolIssuancePolicyBaselineValues";

export interface CaPoolIssuancePolicy {
  /*
Describes constraints on identities that may appear in Certificates issued through this CaPool.
If this is omitted, then this CaPool will not add restrictions on a certificate's identity.
Structure is documented below.
*/
  IdentityConstraints?: CaPoolIssuancePolicyIdentityConstraints;

  /*
The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
*/
  MaximumLifetime?: string;

  /*
IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
Structure is documented below.
*/
  AllowedIssuanceModes?: CaPoolIssuancePolicyAllowedIssuanceModes;

  /*
If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here.
Otherwise, any key may be used.
Structure is documented below.
*/
  AllowedKeyTypes?: Array<CaPoolIssuancePolicyAllowedKeyType>;

  /*
A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request
includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate
request uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate
issuance request will fail.
Structure is documented below.
*/
  BaselineValues?: CaPoolIssuancePolicyBaselineValues;
}
