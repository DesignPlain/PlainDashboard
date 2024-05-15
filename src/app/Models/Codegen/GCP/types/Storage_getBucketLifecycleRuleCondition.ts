import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketLifecycleRuleCondition {
  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  CreatedBefore?: string;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  CustomTimeBefore?: string;

  // Number of days elapsed since the user-specified timestamp set on an object.
  DaysSinceCustomTime?: number;

  // One or more matching name prefixes to satisfy this condition.
  MatchesPrefixes?: Array<string>;

  // Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  NumNewerVersions?: number;

  // Minimum age of an object in days to satisfy this condition.
  Age?: number;

  /*
Number of days elapsed since the noncurrent timestamp of an object. This
										condition is relevant only for versioned objects.
*/
  DaysSinceNoncurrentTime?: number;

  // Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  MatchesStorageClasses?: Array<string>;

  // One or more matching name suffixes to satisfy this condition.
  MatchesSuffixes?: Array<string>;

  // While set true, age value will be omitted.Required to set true when age is unset in the config file.
  NoAge?: boolean;

  // Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  NoncurrentTimeBefore?: string;

  // Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  WithState?: string;
}

export function Storage_getBucketLifecycleRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CustomTimeBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DaysSinceNoncurrentTime",
      "Number of days elapsed since the noncurrent timestamp of an object. This\n\t\t\t\t\t\t\t\t\t\tcondition is relevant only for versioned objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MatchesSuffixes",
      "One or more matching name suffixes to satisfy this condition.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NoncurrentTimeBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreatedBefore",
      "Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DaysSinceCustomTime",
      "Number of days elapsed since the user-specified timestamp set on an object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MatchesPrefixes",
      "One or more matching name prefixes to satisfy this condition.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumNewerVersions",
      "Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Age",
      "Minimum age of an object in days to satisfy this condition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MatchesStorageClasses",
      "Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "NoAge",
      "While set true, age value will be omitted.Required to set true when age is unset in the config file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WithState",
      'Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".',
      [],
      true,
      false,
    ),
  ];
}
