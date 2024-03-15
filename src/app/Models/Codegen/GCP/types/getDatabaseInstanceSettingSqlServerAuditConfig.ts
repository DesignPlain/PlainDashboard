export interface getDatabaseInstanceSettingSqlServerAuditConfig {
  // How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
  RetentionInterval?: string;

  // How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  UploadInterval?: string;

  // The name of the destination bucket (e.g., gs://mybucket).
  Bucket?: string;
}
