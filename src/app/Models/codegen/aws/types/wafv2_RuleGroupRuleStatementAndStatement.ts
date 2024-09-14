import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatement,
  wafv2_RuleGroupRuleStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatement";

export interface wafv2_RuleGroupRuleStatementAndStatement {
  // The statements to combine.
  statements?: Array<wafv2_RuleGroupRuleStatement>;
}

export function wafv2_RuleGroupRuleStatementAndStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "statements",
      "The statements to combine.",
      () => wafv2_RuleGroupRuleStatement_GetTypes(),
      true,
      false,
    ),
  ];
}
