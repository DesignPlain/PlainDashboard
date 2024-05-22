import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementXssMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementXssMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementTextTransformation";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch";

export interface wafv2_WebAclRuleStatementXssMatchStatement {
  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementXssMatchStatementTextTransformation>;

  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch;
}

export function wafv2_WebAclRuleStatementXssMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
