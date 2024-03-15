export interface getBucketLogging {
  // The bucket that will receive log objects.
  LogBucket?: string;

  // The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
  LogObjectPrefix?: string;
}
