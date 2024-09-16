import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_getImageStateChangeReason {
  //
  code?: string;

  //
  message?: string;
}

export function appstream_getImageStateChangeReason_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'message', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'code', '', () => [], true, false),
  ];
}
