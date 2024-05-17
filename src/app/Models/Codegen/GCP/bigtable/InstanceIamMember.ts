import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigtable_InstanceIamMemberCondition,
  Bigtable_InstanceIamMemberCondition_GetTypes,
} from "../types/Bigtable_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  Condition?: Bigtable_InstanceIamMemberCondition;

  /*
The name or relative resource id of the instance to manage IAM policies for.

For `gcp.bigtable.InstanceIamMember` or `gcp.bigtable.InstanceIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  Instance?: string;

  //
  Member?: string;

  /*
The project in which the instance belongs. If it
is not provided, a default will be supplied.
*/
  Project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.InstanceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.InstanceIamPolicy` only:
*/
  Role?: string;
}
export class InstanceIamMember extends Resource {
  //
  public Condition?: Bigtable_InstanceIamMemberCondition;

  // (Computed) The etag of the instances's IAM policy.
  public Etag?: string;

  /*
The name or relative resource id of the instance to manage IAM policies for.

For `gcp.bigtable.InstanceIamMember` or `gcp.bigtable.InstanceIamBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public Instance?: string;

  //
  public Member?: string;

  /*
The project in which the instance belongs. If it
is not provided, a default will be supplied.
*/
  public Project?: string;

  /*
The role that should be applied. Only one
`gcp.bigtable.InstanceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).

`gcp.bigtable.InstanceIamPolicy` only:
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Bigtable_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name or relative resource id of the instance to manage IAM policies for.\n\nFor `gcp.bigtable.InstanceIamMember` or `gcp.bigtable.InstanceIamBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the instance belongs. If it\nis not provided, a default will be supplied.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.bigtable.InstanceIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`. Read more about roles [here](https://cloud.google.com/bigtable/docs/access-control#roles).\n\n`gcp.bigtable.InstanceIamPolicy` only:",
        [],
        true,
        true,
      ),
    ];
  }
}
