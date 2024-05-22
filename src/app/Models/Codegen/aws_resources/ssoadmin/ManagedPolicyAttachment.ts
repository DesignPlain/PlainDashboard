import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ManagedPolicyAttachmentArgs {
  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The IAM managed policy Amazon Resource Name (ARN) to be attached to the Permission Set.
  managedPolicyArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  permissionSetArn?: string;
}
export class ManagedPolicyAttachment extends Resource {
  // The name of the IAM Managed Policy.
  public managedPolicyName?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  public permissionSetArn?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  // The IAM managed policy Amazon Resource Name (ARN) to be attached to the Permission Set.
  public managedPolicyArn?: string;

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
        "managedPolicyArn",
        "The IAM managed policy Amazon Resource Name (ARN) to be attached to the Permission Set.",
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
    ];
  }
}
