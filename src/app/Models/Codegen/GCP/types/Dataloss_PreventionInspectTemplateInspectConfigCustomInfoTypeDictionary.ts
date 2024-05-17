import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath,
  Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath";
import {
  Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList,
  Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList";

export interface Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList;
}

export function Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
