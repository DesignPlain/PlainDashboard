export interface TransferJobTransferSpecObjectConditions {
  // `exclude_prefixes` must follow the requirements described for `include_prefixes`. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).
  ExcludePrefixes?: Array<string>;

  // If `include_prefixes` is specified, objects that satisfy the object conditions must have names that start with one of the `include_prefixes` and that do not start with any of the `exclude_prefixes`. If `include_prefixes` is not specified, all objects except those that have names starting with one of the `exclude_prefixes` must satisfy the object conditions. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).
  IncludePrefixes?: Array<string>;

  // If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  LastModifiedBefore?: string;

  // If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  LastModifiedSince?: string;

  // A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  MaxTimeElapsedSinceLastModification?: string;

  // A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  MinTimeElapsedSinceLastModification?: string;
}
