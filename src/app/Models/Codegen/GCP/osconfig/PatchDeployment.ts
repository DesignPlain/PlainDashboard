import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentOneTimeSchedule,
  Osconfig_PatchDeploymentOneTimeSchedule_GetTypes,
} from "../types/Osconfig_PatchDeploymentOneTimeSchedule";
import {
  Osconfig_PatchDeploymentRecurringSchedule,
  Osconfig_PatchDeploymentRecurringSchedule_GetTypes,
} from "../types/Osconfig_PatchDeploymentRecurringSchedule";
import {
  Osconfig_PatchDeploymentInstanceFilter,
  Osconfig_PatchDeploymentInstanceFilter_GetTypes,
} from "../types/Osconfig_PatchDeploymentInstanceFilter";
import {
  Osconfig_PatchDeploymentRollout,
  Osconfig_PatchDeploymentRollout_GetTypes,
} from "../types/Osconfig_PatchDeploymentRollout";
import {
  Osconfig_PatchDeploymentPatchConfig,
  Osconfig_PatchDeploymentPatchConfig_GetTypes,
} from "../types/Osconfig_PatchDeploymentPatchConfig";

export interface PatchDeploymentArgs {
  /*
Schedule a one-time execution.
Structure is documented below.
*/
  OneTimeSchedule?: Osconfig_PatchDeploymentOneTimeSchedule;

  /*
Schedule recurring executions.
Structure is documented below.
*/
  RecurringSchedule?: Osconfig_PatchDeploymentRecurringSchedule;

  /*
Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  Duration?: string;

  /*
VM instances to patch.
Structure is documented below.
*/
  InstanceFilter?: Osconfig_PatchDeploymentInstanceFilter;

  /*
A name for the patch deployment in the project. When creating a name the following rules apply:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  PatchDeploymentId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Rollout strategy of the patch job.
Structure is documented below.
*/
  Rollout?: Osconfig_PatchDeploymentRollout;

  // Description of the patch deployment. Length of the description is limited to 1024 characters.
  Description?: string;

  /*
Patch configuration that is applied.
Structure is documented below.
*/
  PatchConfig?: Osconfig_PatchDeploymentPatchConfig;
}
export class PatchDeployment extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Schedule recurring executions.
Structure is documented below.
*/
  public RecurringSchedule?: Osconfig_PatchDeploymentRecurringSchedule;

  /*
Rollout strategy of the patch job.
Structure is documented below.
*/
  public Rollout?: Osconfig_PatchDeploymentRollout;

  // Description of the patch deployment. Length of the description is limited to 1024 characters.
  public Description?: string;

  /*
VM instances to patch.
Structure is documented below.
*/
  public InstanceFilter?: Osconfig_PatchDeploymentInstanceFilter;

  /*
Unique name for the patch deployment resource in a project.
The patch deployment name is in the form: projects/{project_id}/patchDeployments/{patchDeploymentId}.
*/
  public Name?: string;

  /*
Schedule a one-time execution.
Structure is documented below.
*/
  public OneTimeSchedule?: Osconfig_PatchDeploymentOneTimeSchedule;

  /*
Patch configuration that is applied.
Structure is documented below.
*/
  public PatchConfig?: Osconfig_PatchDeploymentPatchConfig;

  /*
A name for the patch deployment in the project. When creating a name the following rules apply:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  public PatchDeploymentId?: string;

  /*
Time the patch deployment was last updated. Timestamp is in RFC3339 text format.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Time the patch deployment was created. Timestamp is in RFC3339 text format.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  /*
Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  public Duration?: string;

  /*
(Output)
The time the last patch job ran successfully.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public LastExecuteTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PatchConfig",
        "Patch configuration that is applied.\nStructure is documented below.",
        Osconfig_PatchDeploymentPatchConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "OneTimeSchedule",
        "Schedule a one-time execution.\nStructure is documented below.",
        Osconfig_PatchDeploymentOneTimeSchedule_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RecurringSchedule",
        "Schedule recurring executions.\nStructure is documented below.",
        Osconfig_PatchDeploymentRecurringSchedule_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Duration",
        "Duration of the patch. After the duration ends, the patch times out.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InstanceFilter",
        "VM instances to patch.\nStructure is documented below.",
        Osconfig_PatchDeploymentInstanceFilter_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PatchDeploymentId",
        "A name for the patch deployment in the project. When creating a name the following rules apply:\n* Must contain only lowercase letters, numbers, and hyphens.\n* Must start with a letter.\n* Must be between 1-63 characters.\n* Must end with a number or a letter.\n* Must be unique within the project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Rollout",
        "Rollout strategy of the patch job.\nStructure is documented below.",
        Osconfig_PatchDeploymentRollout_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the patch deployment. Length of the description is limited to 1024 characters.",
        [],
        false,
        true,
      ),
    ];
  }
}
