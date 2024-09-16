import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_BucketLifecycleRuleCondition {
  // Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: `"LIVE"`, `"ARCHIVED"`, `"ANY"`.
  withState?: string;

  // Minimum age of an object in days to satisfy this condition.
  age?: number;

  // Relevant only for versioned objects. Number of days elapsed since the noncurrent timestamp of an object.
  daysSinceNoncurrentTime?: number;

  // One or more matching name prefixes to satisfy this condition.
  matchesPrefixes?: Array<string>;

  // One or more matching name suffixes to satisfy this condition.
  matchesSuffixes?: Array<string>;

  // While set `true`, `age` value will be omitted. --Note-- Required to set `true` when `age` is unset in the config file.
  noAge?: boolean;

  // Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  numNewerVersions?: number;

  // A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when an object is created before midnight of the specified date in UTC.
  createdBefore?: string;

  // A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when the customTime metadata for the object is set to an earlier date than the date used in this lifecycle condition.
  customTimeBefore?: string;

  // Days since the date set in the `customTime` metadata for the object. This condition is satisfied when the current date and time is at least the specified number of days after the `customTime`.
  daysSinceCustomTime?: number;

  // [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects to satisfy this condition. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`, `DURABLE_REDUCED_AVAILABILITY`.
  matchesStorageClasses?: Array<string>;

  // Relevant only for versioned objects. The date in RFC 3339 (e.g. `2017-06-13`) when the object became nonconcurrent.
  noncurrentTimeBefore?: string;
}

export function storage_BucketLifecycleRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'daysSinceCustomTime',
      'Days since the date set in the `customTime` metadata for the object. This condition is satisfied when the current date and time is at least the specified number of days after the `customTime`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'noncurrentTimeBefore',
      'Relevant only for versioned objects. The date in RFC 3339 (e.g. `2017-06-13`) when the object became nonconcurrent.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'withState',
      'Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: `"LIVE"`, `"ARCHIVED"`, `"ANY"`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'daysSinceNoncurrentTime',
      'Relevant only for versioned objects. Number of days elapsed since the noncurrent timestamp of an object.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matchesSuffixes',
      'One or more matching name suffixes to satisfy this condition.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'noAge',
      'While set `true`, `age` value will be omitted. **Note** Required to set `true` when `age` is unset in the config file.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'numNewerVersions',
      'Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createdBefore',
      'A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when an object is created before midnight of the specified date in UTC.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'age',
      'Minimum age of an object in days to satisfy this condition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matchesPrefixes',
      'One or more matching name prefixes to satisfy this condition.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'customTimeBefore',
      'A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when the customTime metadata for the object is set to an earlier date than the date used in this lifecycle condition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matchesStorageClasses',
      '[Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects to satisfy this condition. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`, `DURABLE_REDUCED_AVAILABILITY`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
