export interface CaPoolIssuancePolicyAllowedIssuanceModes {
  // When true, allows callers to create Certificates by specifying a CSR.
  AllowCsrBasedIssuance?: boolean;

  // When true, allows callers to create Certificates by specifying a CertificateConfig.
  AllowConfigBasedIssuance?: boolean;
}
