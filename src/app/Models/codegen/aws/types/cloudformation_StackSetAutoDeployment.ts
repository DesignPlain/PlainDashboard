import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudformation_StackSetAutoDeployment {
  // Whether or not auto-deployment is enabled.
  enabled?: boolean;

  // Whether or not to retain stacks when the account is removed.
  retainStacksOnAccountRemoval?: boolean;
}

export function cloudformation_StackSetAutoDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether or not auto-deployment is enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'retainStacksOnAccountRemoval',
      'Whether or not to retain stacks when the account is removed.',
      () => [],
      false,
      false,
    ),
  ];
}
