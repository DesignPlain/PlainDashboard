import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
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
