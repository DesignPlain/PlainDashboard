export interface getTiersTier {
  // An identifier for the machine type, for example, db-custom-1-3840.
  Tier?: string;

  // The maximum disk size of this tier in bytes.
  DiskQuota?: number;

  // The maximum ram usage of this tier in bytes.
  Ram?: number;

  // The applicable regions for this tier.
  Regions?: Array<string>;
}
