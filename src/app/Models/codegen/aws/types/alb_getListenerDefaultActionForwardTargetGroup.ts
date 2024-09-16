import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_getListenerDefaultActionForwardTargetGroup {
  //
  weight?: number;

  // ARN of the listener. Required if `load_balancer_arn` and `port` is not set.
  arn?: string;
}

export function alb_getListenerDefaultActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'weight', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'arn',
      'ARN of the listener. Required if `load_balancer_arn` and `port` is not set.',
      () => [],
      true,
      false,
    ),
  ];
}
