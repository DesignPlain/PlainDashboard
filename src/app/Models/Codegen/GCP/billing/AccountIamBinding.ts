import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AccountIAMBindingCondition } from "../types/AccountIAMBindingCondition";

export interface AccountIAMBindingArgs {
  /*
The billing account id.

For `gcp.billing.AccountIAMMember` or `gcp.billing.AccountIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  BillingAccountId?: string;

  //
  Condition?: AccountIAMBindingCondition;

  //
  Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.billing.AccountIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.billing.AccountIamPolicy` only:
*/
  Role?: string;
}
export class AccountIAMBinding extends Resource {
  /*
The billing account id.

For `gcp.billing.AccountIAMMember` or `gcp.billing.AccountIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public BillingAccountId?: string;

  //
  public Condition?: AccountIAMBindingCondition;

  // (Computed) The etag of the billing account's IAM policy.
  public Etag?: string;

  //
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.billing.AccountIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.billing.AccountIamPolicy` only:
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BillingAccountId",
        "The billing account id.\n\nFor `gcp.billing.AccountIAMMember` or `gcp.billing.AccountIAMBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      ),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.billing.AccountIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).\n\n`gcp.billing.AccountIamPolicy` only:",
      ),
    ];
  }
}
