export interface BucketLifecycleRuleAction {
  // The target [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects affected by this Lifecycle Rule. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  StorageClass?: string;

  // The type of the action of this Lifecycle Rule. Supported values include: `Delete`, `SetStorageClass` and `AbortIncompleteMultipartUpload`.
  Type?: string;
}
