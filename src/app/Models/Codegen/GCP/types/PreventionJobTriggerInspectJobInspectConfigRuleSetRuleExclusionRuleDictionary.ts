import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";

export interface PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;
}
