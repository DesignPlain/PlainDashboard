import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement {
  // Operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.
  comparisonOperator?: string;

  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch;

  // Size, in bytes, to compare to the request part, after any transformations. Valid values are integers between 0 and 21474836480, inclusive.
  size?: number;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch_GetTypes(),
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
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comparisonOperator",
      "Operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.",
      [],
      true,
      false,
    ),
  ];
}
