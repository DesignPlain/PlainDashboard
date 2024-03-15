export interface getBucketRetentionPolicy {
  // If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
  IsLocked?: boolean;

  // The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
  RetentionPeriod?: number;
}
