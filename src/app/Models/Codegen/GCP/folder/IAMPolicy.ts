import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IAMPolicyArgs {
  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the folder. The policy will be
merged with any existing policy applied to the folder.

Changing this updates the policy.

Deleting this removes all policies from the folder, locking out users without
folder-level access.
*/
  PolicyData?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  Folder?: string;
}
export class IAMPolicy extends Resource {
  // (Computed) The etag of the folder's IAM policy.
  public Etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public Folder?: string;

  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the folder. The policy will be
merged with any existing policy applied to the folder.

Changing this updates the policy.

Deleting this removes all policies from the folder, locking out users without
folder-level access.
*/
  public PolicyData?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PolicyData",
        "The `gcp.organizations.getIAMPolicy` data source that represents\nthe IAM policy that will be applied to the folder. The policy will be\nmerged with any existing policy applied to the folder.\n\nChanging this updates the policy.\n\nDeleting this removes all policies from the folder, locking out users without\nfolder-level access.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
      ),
    ];
  }
}
