import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement {
  // The Amazon Resource Name (ARN) of the Regex Pattern Set that this statement references.
  arn?: string;

  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the Regex Pattern Set that this statement references.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
