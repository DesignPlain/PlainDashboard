export interface BucketLifecycleRuleCondition {
  // Minimum age of an object in days to satisfy this condition.
  Age?: number;

  // Days since the date set in the `customTime` metadata for the object. This condition is satisfied when the current date and time is at least the specified number of days after the `customTime`.
  DaysSinceCustomTime?: number;

  // Relevant only for versioned objects. Number of days elapsed since the noncurrent timestamp of an object.
  DaysSinceNoncurrentTime?: number;

  // Relevant only for versioned objects. The date in RFC 3339 (e.g. `2017-06-13`) when the object became nonconcurrent.
  NoncurrentTimeBefore?: string;

  // While set `true`, `age` value will be omitted. --Note-- Required to set `true` when `age` is unset in the config file.
  NoAge?: boolean;

  // Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  NumNewerVersions?: number;

  // Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: `"LIVE"`, `"ARCHIVED"`, `"ANY"`.
  WithState?: string;

  // A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when an object is created before midnight of the specified date in UTC.
  CreatedBefore?: string;

  // A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when the customTime metadata for the object is set to an earlier date than the date used in this lifecycle condition.
  CustomTimeBefore?: string;

  // One or more matching name prefixes to satisfy this condition.
  MatchesPrefixes?: Array<string>;

  // [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects to satisfy this condition. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`, `DURABLE_REDUCED_AVAILABILITY`.
  MatchesStorageClasses?: Array<string>;

  // One or more matching name suffixes to satisfy this condition.
  MatchesSuffixes?: Array<string>;
}
