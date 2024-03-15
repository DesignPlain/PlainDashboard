export interface TransferJobTransferSpecGcsDataSource {
  // Google Cloud Storage bucket name.
  BucketName?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  Path?: string;
}
