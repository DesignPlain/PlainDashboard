import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_getIAMPolicyBindingCondition,
  Organizations_getIAMPolicyBindingCondition_GetTypes,
} from "./Organizations_getIAMPolicyBindingCondition";

export interface Organizations_getIAMPolicyBinding {
  /*
An array of identities that will be granted the privilege in the `role`. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account. Some resources --don't-- support this identity.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account. Some resources --don't-- support this identity.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  Members?: Array<string>;

  /*
The role/permission that will be granted to the members.
See the [IAM Roles](https://cloud.google.com/compute/docs/access/iam) documentation for a complete list of roles.
Note that custom roles must be of the format `[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  // An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding. Structure is documented below.
  Condition?: Organizations_getIAMPolicyBindingCondition;
}

export function Organizations_getIAMPolicyBinding_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Members",
      "An array of identities that will be granted the privilege in the `role`. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account. Some resources **don't** support this identity.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account. Some resources **don't** support this identity.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Role",
      "The role/permission that will be granted to the members.\nSee the [IAM Roles](https://cloud.google.com/compute/docs/access/iam) documentation for a complete list of roles.\nNote that custom roles must be of the format `[projects|organizations]/{parent-name}/roles/{role-name}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding. Structure is documented below.",
      Organizations_getIAMPolicyBindingCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
