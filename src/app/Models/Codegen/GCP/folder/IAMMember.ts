import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Folder_IAMMemberCondition,
  Folder_IAMMemberCondition_GetTypes,
} from "../types/Folder_IAMMemberCondition";

export interface IAMMemberArgs {
  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  Role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  Condition?: Folder_IAMMemberCondition;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  Folder?: string;

  //
  Member?: string;
}
export class IAMMember extends Resource {
  // (Computed) The etag of the folder's IAM policy.
  public Etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public Folder?: string;

  //
  public Member?: string;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  public Role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public Condition?: Folder_IAMMemberCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format\n`organizations/{{org_id}}/roles/{{role_id}}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
        Folder_IAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
    ];
  }
}
