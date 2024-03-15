import { AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage } from "./AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";
import { AuthorityConfigX509ConfigKeyUsageBaseKeyUsage } from "./AuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import { AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage } from "./AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";

export interface AuthorityConfigX509ConfigKeyUsage {
  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: AuthorityConfigX509ConfigKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
}
