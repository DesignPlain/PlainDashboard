export interface DatabaseInstanceServerCaCert {
  // The CA Certificate used to connect to the SQL Instance via SSL.
  Cert?: string;

  // The CN valid for the CA Cert.
  CommonName?: string;

  // Creation time of the CA Cert.
  CreateTime?: string;

  /*
The [RFC 3339](https://tools.ietf.org/html/rfc3339)
formatted date time string indicating when this whitelist expires.
*/
  ExpirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  Sha1Fingerprint?: string;
}
