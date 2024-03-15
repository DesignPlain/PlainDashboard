import { PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField } from "./PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField";
import { PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet } from "./PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet";
import { PreventionStoredInfoTypeLargeCustomDictionaryOutputPath } from "./PreventionStoredInfoTypeLargeCustomDictionaryOutputPath";

export interface PreventionStoredInfoTypeLargeCustomDictionary {
  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  BigQueryField?: PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;

  /*
Set of files containing newline-delimited lists of dictionary phrases.
Structure is documented below.
*/
  CloudStorageFileSet?: PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;

  /*
Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API.
If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
Structure is documented below.
*/
  OutputPath?: PreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
}
