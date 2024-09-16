import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_PolicyDefinitionStatic {
  // The description of the static policy.
  description?: string;

  // The statement of the static policy.
  statement?: string;
}

export function verifiedpermissions_PolicyDefinitionStatic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the static policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'statement',
      'The statement of the static policy.',
      () => [],
      true,
      false,
    ),
  ];
}
