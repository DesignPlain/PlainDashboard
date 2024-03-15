export interface CertificateConfigX509ConfigKeyUsageExtendedKeyUsage {
  // Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  OcspSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  ServerAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  TimeStamping?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  ClientAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  CodeSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  EmailProtection?: boolean;
}
