import { CertificateConfigX509ConfigKeyUsageBaseKeyUsage } from "./CertificateConfigX509ConfigKeyUsageBaseKeyUsage";
import { CertificateConfigX509ConfigKeyUsageExtendedKeyUsage } from "./CertificateConfigX509ConfigKeyUsageExtendedKeyUsage";
import { CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage } from "./CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";

export interface CertificateConfigX509ConfigKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: CertificateConfigX509ConfigKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: CertificateConfigX509ConfigKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;
}
