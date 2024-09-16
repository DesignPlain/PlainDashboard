import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lb_getTargetGroupStickiness {
  //
  cookieDuration?: number;

  //
  cookieName?: string;

  //
  enabled?: boolean;

  //
  type?: string;
}

export function lb_getTargetGroupStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'cookieDuration',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cookieName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'type', '', () => [], true, false),
  ];
}
