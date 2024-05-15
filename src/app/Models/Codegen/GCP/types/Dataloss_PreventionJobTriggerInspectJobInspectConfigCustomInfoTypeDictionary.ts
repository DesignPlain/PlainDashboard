import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "WordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
  ];
}
