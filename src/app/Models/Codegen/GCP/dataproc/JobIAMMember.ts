import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_JobIAMMemberCondition,
  dataproc_JobIAMMemberCondition_GetTypes,
} from "../types/dataproc_JobIAMMemberCondition";

export interface JobIAMMemberArgs {
  //
  condition?: dataproc_JobIAMMemberCondition;

  //
  jobId?: string;

  //
  member?: string;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  region?: string;

  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  role?: string;
}
export class JobIAMMember extends Resource {
  /*
The role that should be applied. Only one
`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

`gcp.dataproc.JobIAMPolicy` only:
*/
  public role?: string;

  //
  public condition?: dataproc_JobIAMMemberCondition;

  // (Computed) The etag of the jobs's IAM policy.
  public etag?: string;

  //
  public jobId?: string;

  //
  public member?: string;

  /*
The project in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public project?: string;

  /*
The region in which the job belongs. If it
is not provided, the provider will use a default.
*/
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        dataproc_JobIAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "jobId", "", [], true, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the job belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region in which the job belongs. If it\nis not provided, the provider will use a default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.dataproc.JobIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.\n\n`gcp.dataproc.JobIAMPolicy` only:",
        [],
        true,
        true,
      ),
    ];
  }
}
