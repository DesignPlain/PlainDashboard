export interface AuthoritySubordinateConfigPemIssuerChain {
  // Expected to be in leaf-to-root order according to RFC 5246.
  PemCertificates?: Array<string>;
}
