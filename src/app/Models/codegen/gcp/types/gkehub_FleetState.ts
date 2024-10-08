import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FleetState {
  /*
(Output)
Describes the state of a Fleet resource.
*/
  code?: string;
}

export function gkehub_FleetState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'code',
      '(Output)\nDescribes the state of a Fleet resource.',
      () => [],
      false,
      false,
    ),
  ];
}
