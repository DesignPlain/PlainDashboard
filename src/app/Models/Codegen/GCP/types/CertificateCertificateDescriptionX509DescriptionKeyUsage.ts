import { CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage } from "./CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage";
import { CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage } from "./CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage";
import { CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage } from "./CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage";

export interface CertificateCertificateDescriptionX509DescriptionKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsages?: Array<CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsages?: Array<CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage>;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage>;
}
