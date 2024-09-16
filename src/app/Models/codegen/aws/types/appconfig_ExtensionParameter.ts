import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appconfig_ExtensionParameter {
  // Information about the parameter.
  description?: string;

  // The parameter name.
  name?: string;

  // Determines if a parameter value must be specified in the extension association.
  required?: boolean;
}

export function appconfig_ExtensionParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'required',
      'Determines if a parameter value must be specified in the extension association.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Information about the parameter.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The parameter name.',
      () => [],
      true,
      false,
    ),
  ];
}
