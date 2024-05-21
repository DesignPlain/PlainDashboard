import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJob,
  dataloss_PreventionJobTriggerInspectJob_GetTypes,
} from "../types/dataloss_PreventionJobTriggerInspectJob";
import {
  dataloss_PreventionJobTriggerTrigger,
  dataloss_PreventionJobTriggerTrigger_GetTypes,
} from "../types/dataloss_PreventionJobTriggerTrigger";

export interface PreventionJobTriggerArgs {
  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  description?: string;

  // User set display name of the job trigger.
  displayName?: string;

  /*
Controls what and how to inspect for findings.
Structure is documented below.
*/
  inspectJob?: dataloss_PreventionJobTriggerInspectJob;

  /*
The parent of the trigger, either in the format `projects/{{project}}`
or `projects/{{project}}/locations/{{location}}`
*/
  parent?: string;

  /*
Whether the trigger is currently active.
Default value is `HEALTHY`.
Possible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.
*/
  status?: string;

  /*
The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+.
The maximum length is 100 characters. Can be empty to allow the system to generate one.
*/
  triggerId?: string;

  /*
What event needs to occur for a new job to be started.
Structure is documented below.
*/
  triggers?: Array<dataloss_PreventionJobTriggerTrigger>;
}
export class PreventionJobTrigger extends Resource {
  /*
(Output)
The creation timestamp of an inspectTemplate. Set by the server.
*/
  public createTime?: string;

  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  public description?: string;

  /*
Controls what and how to inspect for findings.
Structure is documented below.
*/
  public inspectJob?: dataloss_PreventionJobTriggerInspectJob;

  /*
The parent of the trigger, either in the format `projects/{{project}}`
or `projects/{{project}}/locations/{{location}}`
*/
  public parent?: string;

  /*
The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+.
The maximum length is 100 characters. Can be empty to allow the system to generate one.
*/
  public triggerId?: string;

  // User set display name of the job trigger.
  public displayName?: string;

  // The timestamp of the last time this trigger executed.
  public lastRunTime?: string;

  // Name describing the field excluded from scanning.
  public name?: string;

  /*
Whether the trigger is currently active.
Default value is `HEALTHY`.
Possible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.
*/
  public status?: string;

  /*
What event needs to occur for a new job to be started.
Structure is documented below.
*/
  public triggers?: Array<dataloss_PreventionJobTriggerTrigger>;

  // The last update timestamp of an inspectTemplate. Set by the server.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "triggers",
        "What event needs to occur for a new job to be started.\nStructure is documented below.",
        dataloss_PreventionJobTriggerTrigger_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A short description of where the data is coming from. Will be stored once in the job. 256 max length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User set display name of the job trigger.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inspectJob",
        "Controls what and how to inspect for findings.\nStructure is documented below.",
        dataloss_PreventionJobTriggerInspectJob_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the trigger, either in the format `projects/{{project}}`\nor `projects/{{project}}/locations/{{location}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Whether the trigger is currently active.\nDefault value is `HEALTHY`.\nPossible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "triggerId",
        "The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+.\nThe maximum length is 100 characters. Can be empty to allow the system to generate one.",
        [],
        false,
        true,
      ),
    ];
  }
}
