import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse {
  //
  block?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock;

  // Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.
  captcha?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha;

  // Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.
  challenge?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge;

  //
  count?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount;

  //
  allow?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'block',
      '',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'captcha',
      'Instructs AWS WAF to run a Captcha check against the web request. See `captcha` below for details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCaptcha_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'challenge',
      'Instructs AWS WAF to run a check against the request to verify that the request is coming from a legitimate client session. See `challenge` below for details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseChallenge_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'count',
      '',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'allow',
      '',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUseAllow_GetTypes(),
      false,
      false,
    ),
  ];
}
