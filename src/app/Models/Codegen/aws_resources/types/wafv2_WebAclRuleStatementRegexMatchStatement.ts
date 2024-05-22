import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRegexMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch;

  // String representing the regular expression. Minimum of `1` and maximum of `512` characters.
  regexString?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRegexMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexString",
      "String representing the regular expression. Minimum of `1` and maximum of `512` characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
