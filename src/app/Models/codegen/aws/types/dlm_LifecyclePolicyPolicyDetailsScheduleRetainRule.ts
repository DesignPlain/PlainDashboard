import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule {
  //
  count?: number;

  //
  interval?: number;

  //
  intervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'count', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      'interval',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'intervalUnit',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
