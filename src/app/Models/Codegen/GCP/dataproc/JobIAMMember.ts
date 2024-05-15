import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_JobIAMMemberCondition,
  Dataproc_JobIAMMemberCondition_GetTypes,
} from "../types/Dataproc_JobIAMMemberCondition";

export interface JobIAMMemberArgs {
  //
  Condition?: Dataproc_JobIAMMemberCondition;

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

  //
  public Condition?: Dataproc_JobIAMMemberCondition;

  // (Computed) The etag of the jobs's IAM policy.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Dataproc_JobIAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "JobId", "", [], true, true),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the job belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the job belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.JobIAMPolicy` only:",
        [],
        true,
        true,
      ),
    ];
  }
}
