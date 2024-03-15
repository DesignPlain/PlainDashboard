export interface getBucketCustomPlacementConfig {
  // The list of individual regions that comprise a dual-region bucket. See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.
  DataLocations?: Array<string>;
}
