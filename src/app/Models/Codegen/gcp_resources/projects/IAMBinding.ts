import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  projects_IAMBindingCondition,
  projects_IAMBindingCondition_GetTypes,
} from "../types/projects_IAMBindingCondition";

export interface IAMBindingArgs {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  condition?: projects_IAMBindingCondition;

  //
  members?: Array<string>;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  project?: string;

  /*
The role that should be applied. Only one
`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;
}
export class IAMBinding extends Resource {
  /*
The project id of the target project. This is not
inferred from the provider.
*/
  public project?: string;

  /*
The role that should be applied. Only one
`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public condition?: projects_IAMBindingCondition;

  // (Computed) The etag of the project's IAM policy.
  public etag?: string;

  //
  public members?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
        projects_IAMBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project id of the target project. This is not\ninferred from the provider.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
    ];
  }
}
