import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementSqliMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementSqliMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementSqliMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
