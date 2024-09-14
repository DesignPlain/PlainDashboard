import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  folder_IAMBindingCondition,
  folder_IAMBindingCondition_GetTypes,
} from "../types/folder_IAMBindingCondition";

export interface IAMBindingArgs {
  //
  condition?: folder_IAMBindingCondition;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  folder?: string;

  /*
An array of identities that will be granted the privilege in the `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that is associated with a specific Google account. For example, alice@gmail.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
*/
  members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;
}
export class IAMBinding extends DS_Resource {
  /*
An array of identities that will be granted the privilege in the `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that is associated with a specific Google account. For example, alice@gmail.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding
*/
  public members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public condition?: folder_IAMBindingCondition;

  // (Computed) The etag of the folder's IAM policy.
  public etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public folder?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => folder_IAMBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "An array of identities that will be granted the privilege in the `role`.\nEach entry can have one of the following values:\n* **user:{emailid}**: An email address that is associated with a specific Google account. For example, alice@gmail.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.\n* For more details on format and restrictions see https://cloud.google.com/billing/reference/rest/v1/Policy#Binding",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
