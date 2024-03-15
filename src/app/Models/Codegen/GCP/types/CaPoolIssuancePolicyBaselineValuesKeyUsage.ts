import { CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage } from "./CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage";
import { CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage } from "./CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage";
import { CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage } from "./CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage";

export interface CaPoolIssuancePolicyBaselineValuesKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage>;
}
