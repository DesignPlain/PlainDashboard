import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
