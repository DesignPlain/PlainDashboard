import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath";

export interface Dataloss_PreventionStoredInfoTypeLargeCustomDictionary {
  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  BigQueryField?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;

  /*
Set of files containing newline-delimited lists of dictionary phrases.
Structure is documented below.
*/
  CloudStorageFileSet?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;

  /*
Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API.
If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
Structure is documented below.
*/
  OutputPath?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
}

export function Dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudStorageFileSet",
      "Set of files containing newline-delimited lists of dictionary phrases.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OutputPath",
      "Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API.\nIf any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BigQueryField",
      "Field in a BigQuery table where each cell represents a dictionary phrase.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes(),
      false,
      false,
    ),
  ];
}
