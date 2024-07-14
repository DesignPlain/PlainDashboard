import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementSizeConstraintStatement {
  // The operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.
  comparisonOperator?: string;

  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch;

  // The size, in bytes, to compare to the request part, after any transformations. Valid values are integers between 0 and 21474836480, inclusive.
  size?: number;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementSizeConstraintStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comparisonOperator",
      "The operator to use to compare the request part to the size setting. Valid values include: `EQ`, `NE`, `LE`, `LT`, `GE`, or `GT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size, in bytes, to compare to the request part, after any transformations. Valid values are integers between 0 and 21474836480, inclusive.",
      [],
      true,
      false,
    ),
  ];
}
