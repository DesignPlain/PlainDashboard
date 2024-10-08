import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface keyspaces_TableComment {
  // A description of the table.
  message?: string;
}

export function keyspaces_TableComment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'message',
      'A description of the table.',
      () => [],
      false,
      true,
    ),
  ];
}
