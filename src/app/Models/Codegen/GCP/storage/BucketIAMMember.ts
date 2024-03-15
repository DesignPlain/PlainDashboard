import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BucketIAMMemberCondition } from "../types/BucketIAMMemberCondition";

export interface BucketIAMMemberArgs {
  /*
Used to find the parent resource to bind the IAM policy to

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- --projectOwner:projectid--: Owners of the given project. For example, "projectOwner:my-example-project"
- --projectEditor:projectid--: Editors of the given project. For example, "projectEditor:my-example-project"
- --projectViewer:projectid--: Viewers of the given project. For example, "projectViewer:my-example-project"
*/
  Bucket?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  Condition?: BucketIAMMemberCondition;

  //
  Member?: string;

  /*
The role that should be applied. Only one
`gcp.storage.BucketIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;
}
export class BucketIAMMember extends Resource {
  /*
The role that should be applied. Only one
`gcp.storage.BucketIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  /*
Used to find the parent resource to bind the IAM policy to

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- --projectOwner:projectid--: Owners of the given project. For example, "projectOwner:my-example-project"
- --projectEditor:projectid--: Editors of the given project. For example, "projectEditor:my-example-project"
- --projectViewer:projectid--: Viewers of the given project. For example, "projectViewer:my-example-project"
*/
  public Bucket?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public Condition?: BucketIAMMemberCondition;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  //
  public Member?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.storage.BucketIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        'Used to find the parent resource to bind the IAM policy to\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.\n* **projectOwner:projectid**: Owners of the given project. For example, "projectOwner:my-example-project"\n* **projectEditor:projectid**: Editors of the given project. For example, "projectEditor:my-example-project"\n* **projectViewer:projectid**: Viewers of the given project. For example, "projectViewer:my-example-project"',
      ),
      new DynamicUIProps(
        InputType.String,
        "Condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
      ),
    ];
  }
}
