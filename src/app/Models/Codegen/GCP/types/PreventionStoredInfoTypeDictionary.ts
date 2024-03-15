import { PreventionStoredInfoTypeDictionaryCloudStoragePath } from "./PreventionStoredInfoTypeDictionaryCloudStoragePath";
import { PreventionStoredInfoTypeDictionaryWordList } from "./PreventionStoredInfoTypeDictionaryWordList";

export interface PreventionStoredInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: PreventionStoredInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: PreventionStoredInfoTypeDictionaryWordList;
}
