export interface MetricBucketOptionsExponentialBuckets {
  // Must be greater than 1.
  GrowthFactor?: number;

  // Must be greater than 0.
  NumFiniteBuckets?: number;

  // Must be greater than 0.
  Scale?: number;
}
