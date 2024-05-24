import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
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