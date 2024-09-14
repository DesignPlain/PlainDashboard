import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  folder_IAMMemberCondition,
  folder_IAMMemberCondition_GetTypes,
} from "../types/folder_IAMMemberCondition";

export interface IAMMemberArgs {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  condition?: folder_IAMMemberCondition;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  folder?: string;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  role?: string;
}
export class IAMMember extends DS_Resource {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public condition?: folder_IAMMemberCondition;

  // (Computed) The etag of the folder's IAM policy.
  public etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public folder?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
        () => folder_IAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.folder.IAMBinding` can be used per role. Note that custom roles must be of the format\n`organizations/{{org_id}}/roles/{{role_id}}`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
