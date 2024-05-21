import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  billing_AccountIamMemberCondition,
  billing_AccountIamMemberCondition_GetTypes,
} from "../types/billing_AccountIamMemberCondition";

export interface AccountIamMemberArgs {
  /*
The billing account id.

For `gcp.billing.AccountIamMember` or `gcp.billing.AccountIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  billingAccountId?: string;

  //
  condition?: billing_AccountIamMemberCondition;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.billing.AccountIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.billing.AccountIamPolicy` only:
*/
  role?: string;
}
export class AccountIamMember extends Resource {
  //
  public condition?: billing_AccountIamMemberCondition;

  // (Computed) The etag of the billing account's IAM policy.
  public etag?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.billing.AccountIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.billing.AccountIamPolicy` only:
*/
  public role?: string;

  /*
The billing account id.

For `gcp.billing.AccountIamMember` or `gcp.billing.AccountIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public billingAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "billingAccountId",
        "The billing account id.\n\nFor `gcp.billing.AccountIamMember` or `gcp.billing.AccountIamBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        billing_AccountIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.billing.AccountIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).\n\n`gcp.billing.AccountIamPolicy` only:",
        [],
        true,
        true,
      ),
    ];
  }
}
