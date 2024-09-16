import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
  //
  interval?: number;

  //
  intervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'interval', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'intervalUnit',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
