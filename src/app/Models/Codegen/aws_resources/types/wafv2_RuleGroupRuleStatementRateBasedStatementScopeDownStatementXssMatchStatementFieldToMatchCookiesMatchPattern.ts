import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  //
  includedCookies?: Array<string>;

  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;

  //
  excludedCookies?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludedCookies",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedCookies",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll_GetTypes(),
      false,
      false,
    ),
  ];
}
