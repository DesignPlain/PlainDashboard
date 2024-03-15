export interface getBucketLifecycleRuleCondition {
  // Number of days elapsed since the user-specified timestamp set on an object.
  DaysSinceCustomTime?: number;

  /*
Number of days elapsed since the noncurrent timestamp of an object. This
										condition is relevant only for versioned objects.
*/
  DaysSinceNoncurrentTime?: number;

  // Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  MatchesStorageClasses?: Array<string>;

  // One or more matching name suffixes to satisfy this condition.
  MatchesSuffixes?: Array<string>;

  // Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  NumNewerVersions?: number;

  // Minimum age of an object in days to satisfy this condition.
  Age?: number;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  CreatedBefore?: string;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  CustomTimeBefore?: string;

  // One or more matching name prefixes to satisfy this condition.
  MatchesPrefixes?: Array<string>;

  // While set true, age value will be omitted.Required to set true when age is unset in the config file.
  NoAge?: boolean;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  NoncurrentTimeBefore?: string;

  // Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  WithState?: string;
}
