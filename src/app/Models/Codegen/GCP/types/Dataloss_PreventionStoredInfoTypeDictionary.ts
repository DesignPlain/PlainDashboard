import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionStoredInfoTypeDictionaryWordList,
  dataloss_PreventionStoredInfoTypeDictionaryWordList_GetTypes,
} from "./dataloss_PreventionStoredInfoTypeDictionaryWordList";
import {
  dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath,
  dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath";

export interface dataloss_PreventionStoredInfoTypeDictionary {
  /*
List of words or phrases to search for.
Structure is documented below.
*/
  wordList?: dataloss_PreventionStoredInfoTypeDictionaryWordList;

  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  cloudStoragePath?: dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath;
}

export function dataloss_PreventionStoredInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "wordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      dataloss_PreventionStoredInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
