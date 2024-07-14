import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference,
  ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference_GetTypes,
} from "../types/ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference";

export interface CustomerManagedPolicyAttachmentArgs {
  // Specifies the name and path of a customer managed policy. See below.
  customerManagedPolicyReference?: ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set.
  permissionSetArn?: string;
}
export class CustomerManagedPolicyAttachment extends Resource {
  // The Amazon Resource Name (ARN) of the Permission Set.
  public permissionSetArn?: string;

  // Specifies the name and path of a customer managed policy. See below.
  public customerManagedPolicyReference?: ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "customerManagedPolicyReference",
        "Specifies the name and path of a customer managed policy. See below.",
        ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference_GetTypes(),
        true,
        true,
      ),
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
    ];
  }
}
