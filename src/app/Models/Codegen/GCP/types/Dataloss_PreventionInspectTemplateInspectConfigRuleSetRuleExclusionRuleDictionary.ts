import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";

export interface Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  CloudStoragePath?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;

  /*
List of words or phrases to search for.
Structure is documented below.
*/
  WordList?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;
}

export function Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes(),
      false,
      false,
    ),
  ];
}
