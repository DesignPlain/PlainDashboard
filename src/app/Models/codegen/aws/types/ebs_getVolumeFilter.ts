import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ebs_getVolumeFilter {
  //
  name?: string;

  //
  values?: Array<string>;
}

export function ebs_getVolumeFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'values',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
