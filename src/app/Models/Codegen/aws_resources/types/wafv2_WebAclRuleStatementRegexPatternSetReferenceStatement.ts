import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement {
  // The Amazon Resource Name (ARN) of the Regex Pattern Set that this statement references.
  arn?: string;

  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatement_GetTypes(): DynamicUIProps[] {
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
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
