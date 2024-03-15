import { CertificateCertificateDescriptionX509DescriptionKeyUsage } from "./CertificateCertificateDescriptionX509DescriptionKeyUsage";
import { CertificateCertificateDescriptionX509DescriptionNameConstraint } from "./CertificateCertificateDescriptionX509DescriptionNameConstraint";
import { CertificateCertificateDescriptionX509DescriptionPolicyId } from "./CertificateCertificateDescriptionX509DescriptionPolicyId";
import { CertificateCertificateDescriptionX509DescriptionAdditionalExtension } from "./CertificateCertificateDescriptionX509DescriptionAdditionalExtension";
import { CertificateCertificateDescriptionX509DescriptionCaOption } from "./CertificateCertificateDescriptionX509DescriptionCaOption";

export interface CertificateCertificateDescriptionX509Description {
  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<CertificateCertificateDescriptionX509DescriptionPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<CertificateCertificateDescriptionX509DescriptionAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: Array<CertificateCertificateDescriptionX509DescriptionCaOption>;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsages?: Array<CertificateCertificateDescriptionX509DescriptionKeyUsage>;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: Array<CertificateCertificateDescriptionX509DescriptionNameConstraint>;
}
