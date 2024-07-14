import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
