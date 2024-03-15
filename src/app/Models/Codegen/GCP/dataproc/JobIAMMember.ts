import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobIAMMemberCondition } from "../types/JobIAMMemberCondition";

export interface JobIAMMemberArgs {
  //
  Condition?: JobIAMMemberCondition;

  //
  JobId?: string;

  //
  Member?: string;

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

  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  Role?: string;
}
export class JobIAMMember extends Resource {
  //
  public Condition?: JobIAMMemberCondition;

  // (Computed) The etag of the jobs's IAM policy.
  public Etag?: string;

  //
  public JobId?: string;

  //
  public Member?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "JobId", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
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
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.JobIAMPolicy` only:",
      ),
    ];
  }
}
