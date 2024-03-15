export interface RegionCommitmentLicenseResource {
  // The number of licenses purchased.
  Amount?: string;

  // Specifies the core range of the instance for which this license applies.
  CoresPerLicense?: string;

  // Any applicable license URI.
  License?: string;
}
