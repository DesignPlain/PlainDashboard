import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_PatchDeploymentInstanceFilter,
  osconfig_PatchDeploymentInstanceFilter_GetTypes,
} from "../types/osconfig_PatchDeploymentInstanceFilter";
import {
  osconfig_PatchDeploymentPatchConfig,
  osconfig_PatchDeploymentPatchConfig_GetTypes,
} from "../types/osconfig_PatchDeploymentPatchConfig";
import {
  osconfig_PatchDeploymentRecurringSchedule,
  osconfig_PatchDeploymentRecurringSchedule_GetTypes,
} from "../types/osconfig_PatchDeploymentRecurringSchedule";
import {
  osconfig_PatchDeploymentOneTimeSchedule,
  osconfig_PatchDeploymentOneTimeSchedule_GetTypes,
} from "../types/osconfig_PatchDeploymentOneTimeSchedule";
import {
  osconfig_PatchDeploymentRollout,
  osconfig_PatchDeploymentRollout_GetTypes,
} from "../types/osconfig_PatchDeploymentRollout";

export interface PatchDeploymentArgs {
  /*
Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  duration?: string;

  /*
VM instances to patch.
Structure is documented below.
*/
  instanceFilter?: osconfig_PatchDeploymentInstanceFilter;

  /*
Patch configuration that is applied.
Structure is documented below.
*/
  patchConfig?: osconfig_PatchDeploymentPatchConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Schedule recurring executions.
Structure is documented below.
*/
  recurringSchedule?: osconfig_PatchDeploymentRecurringSchedule;

  // Description of the patch deployment. Length of the description is limited to 1024 characters.
  description?: string;

  /*
Schedule a one-time execution.
Structure is documented below.
*/
  oneTimeSchedule?: osconfig_PatchDeploymentOneTimeSchedule;

  /*
A name for the patch deployment in the project. When creating a name the following rules apply:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  patchDeploymentId?: string;

  /*
Rollout strategy of the patch job.
Structure is documented below.
*/
  rollout?: osconfig_PatchDeploymentRollout;
}
export class PatchDeployment extends DS_Resource {
  /*
Schedule a one-time execution.
Structure is documented below.
*/
  public oneTimeSchedule?: osconfig_PatchDeploymentOneTimeSchedule;

  /*
Patch configuration that is applied.
Structure is documented below.
*/
  public patchConfig?: osconfig_PatchDeploymentPatchConfig;

  /*
Time the patch deployment was created. Timestamp is in RFC3339 text format.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // Description of the patch deployment. Length of the description is limited to 1024 characters.
  public description?: string;

  /*
VM instances to patch.
Structure is documented below.
*/
  public instanceFilter?: osconfig_PatchDeploymentInstanceFilter;

  /*
(Output)
The time the last patch job ran successfully.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public lastExecuteTime?: string;

  /*
Unique name for the patch deployment resource in a project.
The patch deployment name is in the form: projects/{project_id}/patchDeployments/{patchDeploymentId}.
*/
  public name?: string;

  /*
Time the patch deployment was last updated. Timestamp is in RFC3339 text format.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
*/
  public duration?: string;

  /*
A name for the patch deployment in the project. When creating a name the following rules apply:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  public patchDeploymentId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Schedule recurring executions.
Structure is documented below.
*/
  public recurringSchedule?: osconfig_PatchDeploymentRecurringSchedule;

  /*
Rollout strategy of the patch job.
Structure is documented below.
*/
  public rollout?: osconfig_PatchDeploymentRollout;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "instanceFilter",
        "VM instances to patch.\nStructure is documented below.",
        () => osconfig_PatchDeploymentInstanceFilter_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "patchConfig",
        "Patch configuration that is applied.\nStructure is documented below.",
        () => osconfig_PatchDeploymentPatchConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recurringSchedule",
        "Schedule recurring executions.\nStructure is documented below.",
        () => osconfig_PatchDeploymentRecurringSchedule_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rollout",
        "Rollout strategy of the patch job.\nStructure is documented below.",
        () => osconfig_PatchDeploymentRollout_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "duration",
        "Duration of the patch. After the duration ends, the patch times out.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the patch deployment. Length of the description is limited to 1024 characters.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oneTimeSchedule",
        "Schedule a one-time execution.\nStructure is documented below.",
        () => osconfig_PatchDeploymentOneTimeSchedule_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "patchDeploymentId",
        "A name for the patch deployment in the project. When creating a name the following rules apply:\n* Must contain only lowercase letters, numbers, and hyphens.\n* Must start with a letter.\n* Must be between 1-63 characters.\n* Must end with a number or a letter.\n* Must be unique within the project.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
