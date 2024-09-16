import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface controltower_ControlTowerControlParameter {
  // The name of the parameter.
  key?: string;

  // The value of the parameter.
  value?: string;
}

export function controltower_ControlTowerControlParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The name of the parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the parameter.',
      () => [],
      true,
      false,
    ),
  ];
}
