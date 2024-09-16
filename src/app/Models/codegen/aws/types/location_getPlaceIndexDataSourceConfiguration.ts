import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface location_getPlaceIndexDataSourceConfiguration {
  //
  intendedUse?: string;
}

export function location_getPlaceIndexDataSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'intendedUse',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
