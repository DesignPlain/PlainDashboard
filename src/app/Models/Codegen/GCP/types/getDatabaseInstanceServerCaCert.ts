export interface getDatabaseInstanceServerCaCert {
  // The CN valid for the CA Cert.
  CommonName?: string;

  // Creation time of the CA Cert.
  CreateTime?: string;

  // Expiration time of the CA Cert.
  ExpirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  Sha1Fingerprint?: string;

  // The CA Certificate used to connect to the SQL Instance via SSL.
  Cert?: string;
}
