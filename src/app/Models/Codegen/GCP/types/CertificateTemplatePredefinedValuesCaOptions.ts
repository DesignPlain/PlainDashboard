export interface CertificateTemplatePredefinedValuesCaOptions {
  // Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
  IsCa?: boolean;

  // Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
  MaxIssuerPathLength?: number;
}
