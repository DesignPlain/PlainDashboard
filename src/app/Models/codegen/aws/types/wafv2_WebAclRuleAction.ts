import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleActionAllow,
  wafv2_WebAclRuleActionAllow_GetTypes,
} from "./wafv2_WebAclRuleActionAllow";
import {
  wafv2_WebAclRuleActionBlock,
  wafv2_WebAclRuleActionBlock_GetTypes,
} from "./wafv2_WebAclRuleActionBlock";
import {
  wafv2_WebAclRuleActionCaptcha,
  wafv2_WebAclRuleActionCaptcha_GetTypes,
} from "./wafv2_WebAclRuleActionCaptcha";
import {
  wafv2_WebAclRuleActionChallenge,
  wafv2_WebAclRuleActionChallenge_GetTypes,
} from "./wafv2_WebAclRuleActionChallenge";
import {
  wafv2_WebAclRuleActionCount,
  wafv2_WebAclRuleActionCount_GetTypes,
} from "./wafv2_WebAclRuleActionCount";

export interface wafv2_WebAclRuleAction {
  // Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.
  challenge?: wafv2_WebAclRuleActionChallenge;

  // Instructs AWS WAF to count the web request and allow it. See `count` below for details.
  count?: wafv2_WebAclRuleActionCount;

  // Instructs AWS WAF to allow the web request. See `allow` below for details.
  allow?: wafv2_WebAclRuleActionAllow;

  // Instructs AWS WAF to block the web request. See `block` below for details.
  block?: wafv2_WebAclRuleActionBlock;

  // Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.
  captcha?: wafv2_WebAclRuleActionCaptcha;
}

export function wafv2_WebAclRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "challenge",
      "Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.",
      () => wafv2_WebAclRuleActionChallenge_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "count",
      "Instructs AWS WAF to count the web request and allow it. See `count` below for details.",
      () => wafv2_WebAclRuleActionCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "Instructs AWS WAF to allow the web request. See `allow` below for details.",
      () => wafv2_WebAclRuleActionAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "block",
      "Instructs AWS WAF to block the web request. See `block` below for details.",
      () => wafv2_WebAclRuleActionBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "captcha",
      "Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.",
      () => wafv2_WebAclRuleActionCaptcha_GetTypes(),
      false,
      false,
    ),
  ];
}
