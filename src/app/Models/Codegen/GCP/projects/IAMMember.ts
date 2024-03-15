import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMMemberCondition } from "../types/IAMMemberCondition";

export interface IAMMemberArgs {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  Condition?: IAMMemberCondition;

  //
  Member?: string;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  Project?: string;

  /*
The role that should be applied. Only one
`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;
}
export class IAMMember extends Resource {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public Condition?: IAMMemberCondition;

  // (Computed) The etag of the project's IAM policy.
  public Etag?: string;

  //
  public Member?: string;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  public Project?: string;

  /*
The role that should be applied. Only one
`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Condition",
        "An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project id of the target project. This is not\ninferred from the provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.projects.IAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
    ];
  }
}
