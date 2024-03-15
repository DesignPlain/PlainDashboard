import { getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage } from "./getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";
import { getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage } from "./getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import { getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage } from "./getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";

export interface getAuthorityConfigX509ConfigKeyUsage {
  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  UnknownExtendedKeyUsages?: Array<getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;

  // Describes high-level ways in which a key may be used.
  BaseKeyUsages?: Array<getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage>;

  // Describes high-level ways in which a key may be used.
  ExtendedKeyUsages?: Array<getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage>;
}
