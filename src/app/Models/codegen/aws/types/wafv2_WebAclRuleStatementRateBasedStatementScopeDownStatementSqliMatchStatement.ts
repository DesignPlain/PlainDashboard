import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch;

  // Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.
  sensitivityLevel?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sensitivityLevel",
      "Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
