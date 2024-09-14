import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList";

export interface dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  cloudStoragePath?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  wordList?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList;
}

export function dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      () =>
        dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "wordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      () =>
        dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
