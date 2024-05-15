import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionStoredInfoTypeDictionaryWordList,
  Dataloss_PreventionStoredInfoTypeDictionaryWordList_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeDictionaryWordList";
import {
  Dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath,
  Dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath";

export interface Dataloss_PreventionStoredInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: Dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: Dataloss_PreventionStoredInfoTypeDictionaryWordList;
}

export function Dataloss_PreventionStoredInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "WordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
  ];
}
