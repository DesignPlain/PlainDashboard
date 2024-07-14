import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedPaths",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
