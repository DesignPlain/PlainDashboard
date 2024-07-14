import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementByteMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementByteMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementByteMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch;

  // Area within the portion of a web request that you want AWS WAF to search for `search_string`. Valid values include the following: `EXACTLY`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CONTAINS_WORD`. See the AWS [documentation](https://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchStatement.html) for more information.
  positionalConstraint?: string;

  // String value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in `field_to_match`. The maximum length of the value is 50 bytes.
  searchString?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementByteMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementByteMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "positionalConstraint",
      "Area within the portion of a web request that you want AWS WAF to search for `search_string`. Valid values include the following: `EXACTLY`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CONTAINS_WORD`. See the AWS [documentation](https://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchStatement.html) for more information.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "searchString",
      "String value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in `field_to_match`. The maximum length of the value is 50 bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementByteMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
