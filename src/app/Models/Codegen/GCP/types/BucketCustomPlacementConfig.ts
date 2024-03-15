export interface BucketCustomPlacementConfig {
  // The list of individual regions that comprise a dual-region bucket. See [Cloud Storage bucket locations](https://cloud.google.com/storage/docs/dual-regions#availability) for a list of acceptable regions. --Note--: If any of the data_locations changes, it will [recreate the bucket](https://cloud.google.com/storage/docs/locations#key-concepts).
  DataLocations?: Array<string>;
}
