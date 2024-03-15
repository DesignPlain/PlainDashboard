import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMBindingCondition } from "../types/IAMBindingCondition";

export interface IAMBindingArgs {
  //
  Condition?: IAMBindingCondition;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  Folder?: string;

  /*
An array of identities that will be granted the privilege in the `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that is associated with a specific Google account. For example, alice@gmail.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
*/
  Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;
}
export class IAMBinding extends Resource {
  // (Computed) The etag of the folder's IAM policy.
  public Etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public Folder?: string;

  /*
An array of identities that will be granted the privilege in the `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that is associated with a specific Google account. For example, alice@gmail.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
*/
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  //
  public Condition?: IAMBindingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Members",
        "An array of identities that will be granted the privilege in the `role`.\nEach entry can have one of the following values:\n* **user:{emailid}**: An email address that is associated with a specific Google account. For example, alice@gmail.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.\n* For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
    ];
  }
}