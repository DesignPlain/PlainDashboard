import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_getIAMPolicyBindingCondition,
  organizations_getIAMPolicyBindingCondition_GetTypes,
} from "./organizations_getIAMPolicyBindingCondition";

export interface organizations_getIAMPolicyBinding {
  // An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding. Structure is documented below.
  condition?: organizations_getIAMPolicyBindingCondition;

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
  members?: Array<string>;

  /*
The role/permission that will be granted to the members.
See the [IAM Roles](https://cloud.google.com/compute/docs/access/iam) documentation for a complete list of roles.
Note that custom roles must be of the format `[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;
}

export function organizations_getIAMPolicyBinding_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding. Structure is documented below.",
      organizations_getIAMPolicyBindingCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "members",
      "An array of identities that will be granted the privilege in the `role`. For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account. Some resources **don't** support this identity.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account. Some resources **don't** support this identity.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "role",
      "The role/permission that will be granted to the members.\nSee the [IAM Roles](https://cloud.google.com/compute/docs/access/iam) documentation for a complete list of roles.\nNote that custom roles must be of the format `[projects|organizations]/{parent-name}/roles/{role-name}`.",
      [],
      true,
      false,
    ),
  ];
}
