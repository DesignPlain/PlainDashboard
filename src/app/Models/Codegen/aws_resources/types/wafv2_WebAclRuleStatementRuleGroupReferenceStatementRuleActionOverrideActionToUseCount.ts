import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling,
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling_GetTypes,
} from "./wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling";

export interface wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling;
}

export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See `custom_request_handling` below for details.",
      wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseCountCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
