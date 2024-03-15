export interface CertificateRevocationDetail {
  /*
(Output)
Indicates why a Certificate was revoked.
*/
  RevocationState?: string;

  /*
(Output)
The time at which this Certificate was revoked.
*/
  RevocationTime?: string;
}
