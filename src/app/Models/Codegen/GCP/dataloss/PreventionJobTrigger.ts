import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PreventionJobTriggerInspectJob } from "../types/PreventionJobTriggerInspectJob";
import { PreventionJobTriggerTrigger } from "../types/PreventionJobTriggerTrigger";

export interface PreventionJobTriggerArgs {
  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  Description?: string;

  // User set display name of the job trigger.
  DisplayName?: string;

  /*
Controls what and how to inspect for findings.
Structure is documented below.
*/
  InspectJob?: PreventionJobTriggerInspectJob;

  /*
The parent of the trigger, either in the format `projects/{{project}}`
or `projects/{{project}}/locations/{{location}}`
*/
  Parent?: string;

  /*
Whether the trigger is currently active.
Default value is `HEALTHY`.
Possible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.
*/
  Status?: string;

  /*
The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+.
The maximum length is 100 characters. Can be empty to allow the system to generate one.
*/
  TriggerId?: string;

  /*
What event needs to occur for a new job to be started.
Structure is documented below.
*/
  Triggers?: Array<PreventionJobTriggerTrigger>;
}
export class PreventionJobTrigger extends Resource {
  /*
(Output)
The creation timestamp of an inspectTemplate. Set by the server.
*/
  public CreateTime?: string;

  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  public Description?: string;

  // User set display name of the job trigger.
  public DisplayName?: string;

  /*
Controls what and how to inspect for findings.
Structure is documented below.
*/
  public InspectJob?: PreventionJobTriggerInspectJob;

  // The timestamp of the last time this trigger executed.
  public LastRunTime?: string;

  /*
The parent of the trigger, either in the format `projects/{{project}}`
or `projects/{{project}}/locations/{{location}}`
*/
  public Parent?: string;

  /*
The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+.
The maximum length is 100 characters. Can be empty to allow the system to generate one.
*/
  public TriggerId?: string;

  // Name describing the field excluded from scanning.
  public Name?: string;

  /*
Whether the trigger is currently active.
Default value is `HEALTHY`.
Possible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.
*/
  public Status?: string;

  /*
What event needs to occur for a new job to be started.
Structure is documented below.
*/
  public Triggers?: Array<PreventionJobTriggerTrigger>;

  // The last update timestamp of an inspectTemplate. Set by the server.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the job trigger.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InspectJob",
        "Controls what and how to inspect for findings.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the trigger, either in the format `projects/{{project}}`\nor `projects/{{project}}/locations/{{location}}`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Status",
        "Whether the trigger is currently active.\nDefault value is `HEALTHY`.\nPossible values are: `PAUSED`, `HEALTHY`, `CANCELLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TriggerId",
        "The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+.\nThe maximum length is 100 characters. Can be empty to allow the system to generate one.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Triggers",
        "What event needs to occur for a new job to be started.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A short description of where the data is coming from. Will be stored once in the job. 256 max length.",
      ),
    ];
  }
}
