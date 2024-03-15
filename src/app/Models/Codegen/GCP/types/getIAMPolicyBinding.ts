import { getIAMPolicyBindingCondition } from "./getIAMPolicyBindingCondition";

export interface getIAMPolicyBinding {
  // An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding. Structure is documented below.
  Condition?: getIAMPolicyBindingCondition;

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
}
