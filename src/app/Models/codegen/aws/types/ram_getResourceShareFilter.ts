import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ram_getResourceShareFilter {
  // Value of the tag key.
  values?: Array<string>;

  // Name of the tag key to filter on.
  name?: string;
}

export function ram_getResourceShareFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Value of the tag key.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the tag key to filter on.',
      () => [],
      true,
      false,
    ),
  ];
}
