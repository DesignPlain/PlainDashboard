import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse {
  // Instructs AWS WAF to count the web request and allow it. See `count` below for details.
  count?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount;

  // Instructs AWS WAF to allow the web request. See `allow` below for details.
  allow?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow;

  // Instructs AWS WAF to block the web request. See `block` below for details.
  block?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock;

  // Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.
  captcha?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha;

  // Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.
  challenge?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "block",
      "Instructs AWS WAF to block the web request. See `block` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "captcha",
      "Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "challenge",
      "Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "count",
      "Instructs AWS WAF to count the web request and allow it. See `count` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "Instructs AWS WAF to allow the web request. See `allow` below for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow_GetTypes(),
      false,
      false,
    ),
  ];
}
