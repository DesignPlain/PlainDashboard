export interface getBucketObjectContentRetention {
  // The object retention mode. Supported values include: "Unlocked", "Locked".
  Mode?: string;

  // Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.
  RetainUntilTime?: string;
}
