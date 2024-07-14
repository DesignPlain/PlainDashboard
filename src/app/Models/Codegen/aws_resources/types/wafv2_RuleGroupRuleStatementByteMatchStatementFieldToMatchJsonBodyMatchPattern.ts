import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "includedPaths",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
      false,
      false,
    ),
  ];
}
