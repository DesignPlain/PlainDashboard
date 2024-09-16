import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_getListenerDefaultActionForwardStickiness {
  //
  duration?: number;

  //
  enabled?: boolean;
}

export function alb_getListenerDefaultActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'duration', '', () => [], true, false),
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], true, false),
  ];
}
