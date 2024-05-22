import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See `custom_request_handling` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallengeCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
