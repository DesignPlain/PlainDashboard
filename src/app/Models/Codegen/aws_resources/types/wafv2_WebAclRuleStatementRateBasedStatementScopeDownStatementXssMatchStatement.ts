import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
