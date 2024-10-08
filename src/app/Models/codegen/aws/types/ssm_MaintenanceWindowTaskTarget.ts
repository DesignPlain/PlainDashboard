import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ssm_MaintenanceWindowTaskTarget {
  //
  key?: string;

  // The array of strings.
  values?: Array<string>;
}

export function ssm_MaintenanceWindowTaskTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'values',
      'The array of strings.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'key', '', () => [], true, false),
  ];
}
