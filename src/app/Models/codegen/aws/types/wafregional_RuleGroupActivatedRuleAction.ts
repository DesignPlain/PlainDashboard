import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface wafregional_RuleGroupActivatedRuleAction {
  //
  type?: string;
}

export function wafregional_RuleGroupActivatedRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
  ];
}
