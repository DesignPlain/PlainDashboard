export interface MetricBucketOptionsLinearBuckets {
  // Must be greater than 0.
  Width?: number;

  // Must be greater than 0.
  NumFiniteBuckets?: number;

  // Lower bound of the first bucket.
  Offset?: number;
}
