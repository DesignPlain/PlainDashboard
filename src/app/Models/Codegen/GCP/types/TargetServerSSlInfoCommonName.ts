export interface TargetServerSSlInfoCommonName {
  // The TLS Common Name string of the certificate.
  Value?: string;

  // Indicates whether the cert should be matched against as a wildcard cert.
  WildcardMatch?: boolean;
}
