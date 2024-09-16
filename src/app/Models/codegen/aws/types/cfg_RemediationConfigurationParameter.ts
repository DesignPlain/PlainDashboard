import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cfg_RemediationConfigurationParameter {
  // List of static values.
  staticValues?: Array<string>;

  // Name of the attribute.
  name?: string;

  // Value is dynamic and changes at run-time.
  resourceValue?: string;

  // Value is static and does not change at run-time.
  staticValue?: string;
}

export function cfg_RemediationConfigurationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'staticValues',
      'List of static values.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the attribute.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceValue',
      'Value is dynamic and changes at run-time.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'staticValue',
      'Value is static and does not change at run-time.',
      () => [],
      false,
      false,
    ),
  ];
}
