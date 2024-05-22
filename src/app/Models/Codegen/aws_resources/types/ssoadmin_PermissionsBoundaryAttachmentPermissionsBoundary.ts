import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference,
  ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference_GetTypes,
} from "./ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference";

export interface ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary {
  // Specifies the name and path of a customer managed policy. See below.
  customerManagedPolicyReference?: ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference;

  // AWS-managed IAM policy ARN to use as the permissions boundary.
  managedPolicyArn?: string;
}

export function ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customerManagedPolicyReference",
      "Specifies the name and path of a customer managed policy. See below.",
      ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedPolicyArn",
      "AWS-managed IAM policy ARN to use as the permissions boundary.",
      [],
      false,
      true,
    ),
  ];
}
