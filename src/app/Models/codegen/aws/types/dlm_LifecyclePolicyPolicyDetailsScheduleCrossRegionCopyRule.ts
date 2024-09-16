import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule';
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule';

export interface dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
  //
  target?: string;

  //
  cmkArn?: string;

  //
  copyTags?: boolean;

  //
  deprecateRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;

  //
  encrypted?: boolean;

  //
  retainRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'copyTags', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      'deprecateRule',
      '',
      () =>
        dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'encrypted', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Object,
      'retainRule',
      '',
      () =>
        dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'target', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'cmkArn', '', () => [], false, false),
  ];
}
