import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securitycenter_InstanceIamMemberCondition {
  //
  title?: string;

  // An optional description of the instance.
  description?: string;

  //
  expression?: string;
}

export function securitycenter_InstanceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'title', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'description',
      'An optional description of the instance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'expression',
      '',
      () => [],
      true,
      true,
    ),
  ];
}
