import { PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList";

export interface PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList;
}
