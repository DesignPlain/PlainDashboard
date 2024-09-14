import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex {
  /*
Pattern defining the regular expression. Its syntax
(https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
*/
  pattern?: string;

  /*
The index of the submatch to extract as findings. When not specified,
the entire match is returned. No more than 3 may be included.
*/
  groupIndexes?: Array<number>;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pattern",
      "Pattern defining the regular expression. Its syntax\n(https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "groupIndexes",
      "The index of the submatch to extract as findings. When not specified,\nthe entire match is returned. No more than 3 may be included.",
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
