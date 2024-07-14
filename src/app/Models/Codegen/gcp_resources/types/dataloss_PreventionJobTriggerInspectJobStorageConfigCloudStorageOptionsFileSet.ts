import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet,
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet {
  /*
The regex-filtered set of files to scan.
Structure is documented below.
*/
  regexFileSet?: dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;

  /*
The Cloud Storage url of the file(s) to scan, in the format `gs://<bucket>/<path>`. Trailing wildcard
in the path is allowed.
If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is
equivalent to `gs://mybucket/-`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/-`.
*/
  url?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "regexFileSet",
      "The regex-filtered set of files to scan.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The Cloud Storage url of the file(s) to scan, in the format `gs://<bucket>/<path>`. Trailing wildcard\nin the path is allowed.\nIf the url ends in a trailing slash, the bucket or directory represented by the url will be scanned\nnon-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is\nequivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`.",
      [],
      false,
      false,
    ),
  ];
}
