import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface keyspaces_TableTtl {
  // Valid values: `ENABLED`.
  status?: string;
}

export function keyspaces_TableTtl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'Valid values: `ENABLED`.',
      () => [],
      true,
      false,
    ),
  ];
}
