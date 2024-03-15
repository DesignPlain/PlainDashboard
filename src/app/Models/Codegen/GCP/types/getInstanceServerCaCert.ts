export interface getInstanceServerCaCert {
  // The certificate data in PEM format.
  Cert?: string;

  // The time when the certificate was created.
  CreateTime?: string;

  // The time when the certificate expires.
  ExpireTime?: string;

  // Serial number, as extracted from the certificate.
  SerialNumber?: string;

  // Sha1 Fingerprint of the certificate.
  Sha1Fingerprint?: string;
}
