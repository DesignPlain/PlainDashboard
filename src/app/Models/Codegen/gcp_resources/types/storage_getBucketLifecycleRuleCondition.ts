import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_getBucketLifecycleRuleCondition {
  // Minimum age of an object in days to satisfy this condition.
  age?: number;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  createdBefore?: string;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  customTimeBefore?: string;

  // Number of days elapsed since the user-specified timestamp set on an object.
  daysSinceCustomTime?: number;

  // Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  numNewerVersions?: number;

  /*
Number of days elapsed since the noncurrent timestamp of an object. This
										condition is relevant only for versioned objects.
*/
  daysSinceNoncurrentTime?: number;

  // One or more matching name prefixes to satisfy this condition.
  matchesPrefixes?: Array<string>;

  // Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  matchesStorageClasses?: Array<string>;

  // One or more matching name suffixes to satisfy this condition.
  matchesSuffixes?: Array<string>;

  // While set true, age value will be omitted.Required to set true when age is unset in the config file.
  noAge?: boolean;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  noncurrentTimeBefore?: string;

  // Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  withState?: string;
}

export function storage_getBucketLifecycleRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matchesStorageClasses",
      "Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "noncurrentTimeBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "withState",
      'Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createdBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "daysSinceCustomTime",
      "Number of days elapsed since the user-specified timestamp set on an object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matchesPrefixes",
      "One or more matching name prefixes to satisfy this condition.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "daysSinceNoncurrentTime",
      "Number of days elapsed since the noncurrent timestamp of an object. This\n\t\t\t\t\t\t\t\t\t\tcondition is relevant only for versioned objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matchesSuffixes",
      "One or more matching name suffixes to satisfy this condition.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noAge",
      "While set true, age value will be omitted.Required to set true when age is unset in the config file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "age",
      "Minimum age of an object in days to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customTimeBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numNewerVersions",
      "Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.",
      [],
      true,
      false,
    ),
  ];
}
