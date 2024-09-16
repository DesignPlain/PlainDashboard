import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary,
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary_GetTypes,
} from '../types/ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary';

export interface PermissionsBoundaryAttachmentArgs {
  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  permissionSetArn?: string;

  // The permissions boundary policy. See below.
  permissionsBoundary?: ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary;
}
export class PermissionsBoundaryAttachment extends DS_Resource {
  // The Amazon Resource Name (ARN) of the Permission Set.
  public permissionSetArn?: string;

  // The permissions boundary policy. See below.
  public permissionsBoundary?: ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'permissionSetArn',
        'The Amazon Resource Name (ARN) of the Permission Set.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'permissionsBoundary',
        'The permissions boundary policy. See below.',
        () =>
          ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceArn',
        'The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
