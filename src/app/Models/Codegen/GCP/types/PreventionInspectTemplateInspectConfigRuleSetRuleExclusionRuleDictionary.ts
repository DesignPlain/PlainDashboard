import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";
import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";

export interface PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;
}
