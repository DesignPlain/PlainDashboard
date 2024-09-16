import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PermissionSetInlinePolicyArgs {
  // The IAM inline policy to attach to a Permission Set.
  inlinePolicy?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  permissionSetArn?: string;
}
export class PermissionSetInlinePolicy extends DS_Resource {
  // The IAM inline policy to attach to a Permission Set.
  public inlinePolicy?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  public permissionSetArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'inlinePolicy',
        'The IAM inline policy to attach to a Permission Set.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceArn',
        'The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'permissionSetArn',
        'The Amazon Resource Name (ARN) of the Permission Set.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
