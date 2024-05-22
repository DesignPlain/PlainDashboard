import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference {
  // The path to the IAM policy to be attached. The default is `/`. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) for more information.
  path?: string;

  // Name of the customer managed IAM Policy to be attached.
  name?: string;
}

export function ssoadmin_PermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path to the IAM policy to be attached. The default is `/`. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) for more information.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the customer managed IAM Policy to be attached.",
      [],
      true,
      true,
    ),
  ];
}
