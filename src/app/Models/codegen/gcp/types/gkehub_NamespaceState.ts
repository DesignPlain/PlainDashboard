import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_NamespaceState {
  /*
(Output)
Code describes the state of a Namespace resource.
*/
  code?: string;
}

export function gkehub_NamespaceState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'code',
      '(Output)\nCode describes the state of a Namespace resource.',
      () => [],
      false,
      false,
    ),
  ];
}
