import { PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath } from "./PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath";
import { PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList } from "./PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList";

export interface PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList;
}
