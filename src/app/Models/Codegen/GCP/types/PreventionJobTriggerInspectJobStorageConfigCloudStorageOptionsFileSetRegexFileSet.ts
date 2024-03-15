export interface PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
  // The name of a Cloud Storage bucket.
  BucketName?: string;

  /*
A list of regular expressions matching file paths to exclude. All files in the bucket that match at
least one of these regular expressions will be excluded from the scan.
*/
  ExcludeRegexes?: Array<string>;

  /*
A list of regular expressions matching file paths to include. All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .- in the list)
*/
  IncludeRegexes?: Array<string>;
}
