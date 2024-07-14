import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference {
  // Name of the customer managed IAM Policy to be attached.
  name?: string;

  // The path to the IAM policy to be attached. The default is `/`. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) for more information.
  path?: string;
}

export function ssoadmin_CustomerManagedPolicyAttachmentCustomerManagedPolicyReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the customer managed IAM Policy to be attached.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path to the IAM policy to be attached. The default is `/`. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) for more information.",
      [],
      false,
      true,
    ),
  ];
}
