import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleActionChallengeCustomRequestHandling,
  wafv2_RuleGroupRuleActionChallengeCustomRequestHandling_GetTypes,
} from "./wafv2_RuleGroupRuleActionChallengeCustomRequestHandling";

export interface wafv2_RuleGroupRuleActionChallenge {
  // Defines custom handling for the web request. See Custom Request Handling below for details.
  customRequestHandling?: wafv2_RuleGroupRuleActionChallengeCustomRequestHandling;
}

export function wafv2_RuleGroupRuleActionChallenge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See Custom Request Handling below for details.",
      wafv2_RuleGroupRuleActionChallengeCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
