import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  cloudStoragePath?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  wordList?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "wordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
