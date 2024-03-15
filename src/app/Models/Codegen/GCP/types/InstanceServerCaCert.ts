export interface InstanceServerCaCert {
  /*
(Output)
Serial number, as extracted from the certificate.
*/
  SerialNumber?: string;

  /*
(Output)
Sha1 Fingerprint of the certificate.
*/
  Sha1Fingerprint?: string;

  /*
(Output)
The certificate data in PEM format.
*/
  Cert?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  CreateTime?: string;

  /*
(Output)
The time when the certificate expires.
*/
  ExpireTime?: string;
}
