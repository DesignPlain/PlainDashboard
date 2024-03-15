import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterIAMPolicyArgs {
  /*
The policy data generated by a `gcp.organizations.getIAMPolicy` data source.

- - -
*/
  PolicyData?: string;

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
}
export class ClusterIAMPolicy extends Resource {
  // (Computed) The etag of the clusters's IAM policy.
  public Etag?: string;

  /*
The policy data generated by a `gcp.organizations.getIAMPolicy` data source.

- - -
*/
  public PolicyData?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PolicyData",
        "The policy data generated by a `gcp.organizations.getIAMPolicy` data source.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the cluster belongs. If it\nis not provided, the provider will use a default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the cluster belongs. If it\nis not provided, the provider will use a default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The name or relative resource id of the cluster to manage IAM policies for.\n\nFor `gcp.dataproc.ClusterIAMMember` or `gcp.dataproc.ClusterIAMBinding`:\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      ),
    ];
  }
}