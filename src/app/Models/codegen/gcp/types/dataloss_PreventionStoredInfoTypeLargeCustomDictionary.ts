import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes,
} from './dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField';
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes,
} from './dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet';
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath_GetTypes,
} from './dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath';

export interface dataloss_PreventionStoredInfoTypeLargeCustomDictionary {
  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  bigQueryField?: dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;

  /*
Set of files containing newline-delimited lists of dictionary phrases.
Structure is documented below.
*/
  cloudStorageFileSet?: dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;

  /*
Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API.
If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
Structure is documented below.
*/
  outputPath?: dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
}

export function dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'bigQueryField',
      'Field in a BigQuery table where each cell represents a dictionary phrase.\nStructure is documented below.',
      () =>
        dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudStorageFileSet',
      'Set of files containing newline-delimited lists of dictionary phrases.\nStructure is documented below.',
      () =>
        dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'outputPath',
      'Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API.\nIf any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.\nStructure is documented below.',
      () =>
        dataloss_PreventionStoredInfoTypeLargeCustomDictionaryOutputPath_GetTypes(),
      true,
      false,
    ),
  ];
}
