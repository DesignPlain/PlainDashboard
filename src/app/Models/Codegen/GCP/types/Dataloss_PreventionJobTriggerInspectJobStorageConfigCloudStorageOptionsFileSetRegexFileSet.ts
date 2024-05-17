import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
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

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BucketName",
      "The name of a Cloud Storage bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludeRegexes",
      "A list of regular expressions matching file paths to exclude. All files in the bucket that match at\nleast one of these regular expressions will be excluded from the scan.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludeRegexes",
      "A list of regular expressions matching file paths to include. All files in the bucket\nthat match at least one of these regular expressions will be included in the set of files,\nexcept for those that also match an item in excludeRegex. Leaving this field empty will\nmatch all files by default (this is equivalent to including .* in the list)",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
