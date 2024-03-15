export interface BucketRetentionPolicy {
  // The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 2,147,483,647 seconds.
  RetentionPeriod?: number;

  // If set to `true`, the bucket will be [locked](https://cloud.google.com/storage/docs/using-bucket-lock#lock-bucket) and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
  IsLocked?: boolean;
}
