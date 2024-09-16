import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_ApplicationEnvironment {
  // Variable name.
  key?: string;

  // Set visibility of the variable value to `true` or `false`.
  secure?: boolean;

  // Variable value.
  value?: string;
}

export function opsworks_ApplicationEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Variable name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'secure',
      'Set visibility of the variable value to `true` or `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Variable value.',
      () => [],
      true,
      false,
    ),
  ];
}
