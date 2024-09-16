import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface accesscontextmanager_AccessPolicyIamBindingCondition {
  //
  expression?: string;

  //
  title?: string;

  //
  description?: string;
}

export function accesscontextmanager_AccessPolicyIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'expression',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, 'title', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'description',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
