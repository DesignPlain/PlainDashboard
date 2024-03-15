export interface CertificateConfigX509ConfigCaOptions {
  /*
When true, the "CA" in Basic Constraints extension will be set to false.
If both `is_ca` and `non_ca` are unset, the extension will be omitted from the CA certificate.
*/
  NonCa?: boolean;

  /*
When true, the "path length constraint" in Basic Constraints extension will be set to 0.
if both `max_issuer_path_length` and `zero_max_issuer_path_length` are unset,
the max path length will be omitted from the CA certificate.
*/
  ZeroMaxIssuerPathLength?: boolean;

  // When true, the "CA" in Basic Constraints extension will be set to true.
  IsCa?: boolean;

  /*
Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
*/
  MaxIssuerPathLength?: number;
}
