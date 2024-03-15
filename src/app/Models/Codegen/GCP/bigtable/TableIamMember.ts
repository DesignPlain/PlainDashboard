import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TableIAMMemberCondition } from "../types/TableIAMMemberCondition";

export interface TableIAMMemberArgs {
  //
  Condition?: TableIAMMemberCondition;

  // The name or relative resource id of the instance that owns the table.
  Instance?: string;

  //
  Member?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  Project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.TableIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.TableIamPolicy` only:
*/
  Role?: string;

  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIAMMember` or `gcp.bigtable.TableIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  Table?: string;
}
export class TableIAMMember extends Resource {
  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIAMMember` or `gcp.bigtable.TableIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public Table?: string;

  //
  public Condition?: TableIAMMemberCondition;

  // (Computed) The etag of the tables's IAM policy.
  public Etag?: string;

  // The name or relative resource id of the instance that owns the table.
  public Instance?: string;

  //
  public Member?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  public Project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.TableIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.TableIamPolicy` only:
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name or relative resource id of the instance that owns the table.",
      ),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the table belongs. If it\nis not provided, this provider will use the provider default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.bigtable.TableIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).\n\n`gcp.bigtable.TableIamPolicy` only:",
      ),
      new DynamicUIProps(
        InputType.String,
        "Table",
        "The name or relative resource id of the table to manage IAM policies for.\n\nFor `gcp.bigtable.TableIAMMember` or `gcp.bigtable.TableIAMBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      ),
      new DynamicUIProps(InputType.String, "Condition", ""),
    ];
  }
}
