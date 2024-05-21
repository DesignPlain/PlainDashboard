import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kms_KeyRingIAMMemberCondition,
  kms_KeyRingIAMMemberCondition_GetTypes,
} from "../types/kms_KeyRingIAMMemberCondition";

export interface KeyRingIAMMemberArgs {
  /*
The key ring ID, in the form
`{project_id}/{location_name}/{key_ring_name}` or
`{location_name}/{key_ring_name}`. In the second form, the provider's
project setting will be used as a fallback.

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  keyRingId?: string;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.kms.KeyRingIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  condition?: kms_KeyRingIAMMemberCondition;
}
export class KeyRingIAMMember extends Resource {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public condition?: kms_KeyRingIAMMemberCondition;

  // (Computed) The etag of the key ring's IAM policy.
  public etag?: string;

  /*
The key ring ID, in the form
`{project_id}/{location_name}/{key_ring_name}` or
`{location_name}/{key_ring_name}`. In the second form, the provider's
project setting will be used as a fallback.

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public keyRingId?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.kms.KeyRingIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
        kms_KeyRingIAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyRingId",
        "The key ring ID, in the form\n`{project_id}/{location_name}/{key_ring_name}` or\n`{location_name}/{key_ring_name}`. In the second form, the provider's\nproject setting will be used as a fallback.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.kms.KeyRingIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
    ];
  }
}
