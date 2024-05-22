import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary,
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary_GetTypes,
} from "../types/ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary";

export interface PermissionsBoundaryAttachmentArgs {
  // The permissions boundary policy. See below.
  permissionsBoundary?: ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  permissionSetArn?: string;
}
export class PermissionsBoundaryAttachment extends Resource {
  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  public permissionSetArn?: string;

  // The permissions boundary policy. See below.
  public permissionsBoundary?: ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "permissionSetArn",
        "The Amazon Resource Name (ARN) of the Permission Set.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "permissionsBoundary",
        "The permissions boundary policy. See below.",
        ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
