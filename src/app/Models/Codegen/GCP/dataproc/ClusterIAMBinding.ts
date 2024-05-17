import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterIAMBindingCondition,
  Dataproc_ClusterIAMBindingCondition_GetTypes,
} from "../types/Dataproc_ClusterIAMBindingCondition";

export interface ClusterIAMBindingArgs {
  /*
The project in which the cluster belongs. If it
is not provided, the provider will use a default.
*/
  Project?: string;

  /*
The region in which the cluster belongs. If it
is not provided, the provider will use a default.
*/
  Region?: string;

  /*
The role that should be applied. Only one
`gcp.dataproc.ClusterIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.ClusterIAMPolicy` only:
*/
  Role?: string;

  /*
The name or relative resource id of the cluster to manage IAM policies for.

For `gcp.dataproc.ClusterIAMMember` or `gcp.dataproc.ClusterIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  Cluster?: string;

  //
  Condition?: Dataproc_ClusterIAMBindingCondition;

  //
  Members?: Array<string>;
}
export class ClusterIAMBinding extends Resource {
  // (Computed) The etag of the clusters's IAM policy.
  public Etag?: string;

  //
  public Members?: Array<string>;

  /*
The project in which the cluster belongs. If it
is not provided, the provider will use a default.
*/
  public Project?: string;

  /*
The region in which the cluster belongs. If it
is not provided, the provider will use a default.
*/
  public Region?: string;

  /*
The role that should be applied. Only one
`gcp.dataproc.ClusterIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.ClusterIAMPolicy` only:
*/
  public Role?: string;

  /*
The name or relative resource id of the cluster to manage IAM policies for.

For `gcp.dataproc.ClusterIAMMember` or `gcp.dataproc.ClusterIAMBinding`:

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public Cluster?: string;

  //
  public Condition?: Dataproc_ClusterIAMBindingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.dataproc.ClusterIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.ClusterIAMPolicy` only:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The name or relative resource id of the cluster to manage IAM policies for.\n\nFor `gcp.dataproc.ClusterIAMMember` or `gcp.dataproc.ClusterIAMBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Dataproc_ClusterIAMBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the cluster belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the cluster belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
    ];
  }
}
