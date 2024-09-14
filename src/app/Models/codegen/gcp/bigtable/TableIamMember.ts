import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigtable_TableIamMemberCondition,
  bigtable_TableIamMemberCondition_GetTypes,
} from "../types/bigtable_TableIamMemberCondition";

export interface TableIamMemberArgs {
  //
  member?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.TableIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.TableIamPolicy` only:
*/
  role?: string;

  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  table?: string;

  //
  condition?: bigtable_TableIamMemberCondition;

  // The name or relative resource id of the instance that owns the table.
  instance?: string;
}
export class TableIamMember extends DS_Resource {
  //
  public member?: string;

  /*
The project in which the table belongs. If it
is not provided, this provider will use the provider default.
*/
  public project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.TableIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.TableIamPolicy` only:
*/
  public role?: string;

  /*
The name or relative resource id of the table to manage IAM policies for.

For `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public table?: string;

  //
  public condition?: bigtable_TableIamMemberCondition;

  // (Computed) The etag of the tables's IAM policy.
  public etag?: string;

  // The name or relative resource id of the instance that owns the table.
  public instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name or relative resource id of the instance that owns the table.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the table belongs. If it\nis not provided, this provider will use the provider default.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.bigtable.TableIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).\n\n`gcp.bigtable.TableIamPolicy` only:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "table",
        "The name or relative resource id of the table to manage IAM policies for.\n\nFor `gcp.bigtable.TableIamMember` or `gcp.bigtable.TableIamBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => bigtable_TableIamMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
