import { AuthoritySubordinateConfigPemIssuerChain } from "./AuthoritySubordinateConfigPemIssuerChain";

export interface AuthoritySubordinateConfig {
  /*
This can refer to a CertificateAuthority that was used to create a
subordinate CertificateAuthority. This field is used for information
and usability purposes only. The resource name is in the format
`projects/-/locations/-/caPools/-/certificateAuthorities/-`.
*/
  CertificateAuthority?: string;

  /*
Contains the PEM certificate chain for the issuers of this CertificateAuthority,
but not pem certificate for this CA itself.
Structure is documented below.
*/
  PemIssuerChain?: AuthoritySubordinateConfigPemIssuerChain;
}
