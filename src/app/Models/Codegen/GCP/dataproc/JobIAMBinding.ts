import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobIAMBindingCondition } from "../types/JobIAMBindingCondition";

export interface JobIAMBindingArgs {
  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  Role?: string;

  //
  Condition?: JobIAMBindingCondition;

  //
  JobId?: string;

  //
  Members?: Array<string>;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  Project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  Region?: string;
}
export class JobIAMBinding extends Resource {
  // (Computed) The etag of the jobs's IAM policy.
  public Etag?: string;

  //
  public JobId?: string;

  //
  public Members?: Array<string>;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public Project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public Region?: string;

  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  public Role?: string;

  //
  public Condition?: JobIAMBindingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.JobIAMPolicy` only:",
      ),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "JobId", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the job belongs. If it\nis not provided, the provider will use a default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the job belongs. If it\nis not provided, the provider will use a default.",
      ),
    ];
  }
}
