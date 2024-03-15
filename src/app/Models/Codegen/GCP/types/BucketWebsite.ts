export interface BucketWebsite {
  /*
Behaves as the bucket's directory index where
missing objects are treated as potential directories.
*/
  MainPageSuffix?: string;

  /*
The custom object to return when a requested
resource is not found.
*/
  NotFoundPage?: string;
}
