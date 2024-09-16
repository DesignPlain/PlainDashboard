import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_FileCacheLustreConfigurationLogConfiguration {
  //
  destination?: string;

  //
  level?: string;
}

export function fsx_FileCacheLustreConfigurationLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'destination',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'level', '', () => [], false, false),
  ];
}
