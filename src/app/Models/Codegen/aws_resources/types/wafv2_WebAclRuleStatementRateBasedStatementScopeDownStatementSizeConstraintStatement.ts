import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement {
  // Operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.
  comparisonOperator?: string;

  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch;

  // Size, in bytes, to compare to the request part, after any transformations. Valid values are integers between 0 and 21474836480, inclusive.
  size?: number;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comparisonOperator",
      "Operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "Size, in bytes, to compare to the request part, after any transformations. Valid values are integers between 0 and 21474836480, inclusive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
