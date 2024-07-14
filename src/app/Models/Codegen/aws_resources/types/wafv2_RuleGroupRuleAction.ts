import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleActionBlock,
  wafv2_RuleGroupRuleActionBlock_GetTypes,
} from "./wafv2_RuleGroupRuleActionBlock";
import {
  wafv2_RuleGroupRuleActionCaptcha,
  wafv2_RuleGroupRuleActionCaptcha_GetTypes,
} from "./wafv2_RuleGroupRuleActionCaptcha";
import {
  wafv2_RuleGroupRuleActionChallenge,
  wafv2_RuleGroupRuleActionChallenge_GetTypes,
} from "./wafv2_RuleGroupRuleActionChallenge";
import {
  wafv2_RuleGroupRuleActionCount,
  wafv2_RuleGroupRuleActionCount_GetTypes,
} from "./wafv2_RuleGroupRuleActionCount";
import {
  wafv2_RuleGroupRuleActionAllow,
  wafv2_RuleGroupRuleActionAllow_GetTypes,
} from "./wafv2_RuleGroupRuleActionAllow";

export interface wafv2_RuleGroupRuleAction {
  // Instructs AWS WAF to block the web request. See Block below for details.
  block?: wafv2_RuleGroupRuleActionBlock;

  // Instructs AWS WAF to run a `CAPTCHA` check against the web request. See Captcha below for details.
  captcha?: wafv2_RuleGroupRuleActionCaptcha;

  // Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See Challenge below for details.
  challenge?: wafv2_RuleGroupRuleActionChallenge;

  // Instructs AWS WAF to count the web request and allow it. See Count below for details.
  count?: wafv2_RuleGroupRuleActionCount;

  // Instructs AWS WAF to allow the web request. See Allow below for details.
  allow?: wafv2_RuleGroupRuleActionAllow;
}

export function wafv2_RuleGroupRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "count",
      "Instructs AWS WAF to count the web request and allow it. See Count below for details.",
      wafv2_RuleGroupRuleActionCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "Instructs AWS WAF to allow the web request. See Allow below for details.",
      wafv2_RuleGroupRuleActionAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "block",
      "Instructs AWS WAF to block the web request. See Block below for details.",
      wafv2_RuleGroupRuleActionBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "captcha",
      "Instructs AWS WAF to run a `CAPTCHA` check against the web request. See Captcha below for details.",
      wafv2_RuleGroupRuleActionCaptcha_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "challenge",
      "Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See Challenge below for details.",
      wafv2_RuleGroupRuleActionChallenge_GetTypes(),
      false,
      false,
    ),
  ];
}
