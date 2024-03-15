export interface getCaCertsCert {
  // Creation time of the CA cert.
  CreateTime?: string;

  // Expiration time of the CA cert.
  ExpirationTime?: string;

  // SHA1 fingerprint of the CA cert.
  Sha1Fingerprint?: string;

  // The CA certificate used to connect to the SQL instance via SSL.
  Cert?: string;

  // The CN valid for the CA cert.
  CommonName?: string;
}
