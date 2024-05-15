import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskTriggerSpec,
  Dataplex_TaskTriggerSpec_GetTypes,
} from "../types/Dataplex_TaskTriggerSpec";
import {
  Dataplex_TaskExecutionSpec,
  Dataplex_TaskExecutionSpec_GetTypes,
} from "../types/Dataplex_TaskExecutionSpec";
import {
  Dataplex_TaskNotebook,
  Dataplex_TaskNotebook_GetTypes,
} from "../types/Dataplex_TaskNotebook";
import {
  Dataplex_TaskExecutionStatus,
  Dataplex_TaskExecutionStatus_GetTypes,
} from "../types/Dataplex_TaskExecutionStatus";
import {
  Dataplex_TaskSpark,
  Dataplex_TaskSpark_GetTypes,
} from "../types/Dataplex_TaskSpark";

export interface TaskArgs {
  // The lake in which the task will be created in.
  Lake?: string;

  // The location in which the task will be created in.
  Location?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  Spark?: Dataplex_TaskSpark;

  /*
Configuration for the cluster
Structure is documented below.
*/
  TriggerSpec?: Dataplex_TaskTriggerSpec;

  // User-provided description of the task.
  Description?: string;

  // User friendly display name.
  DisplayName?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  ExecutionSpec?: Dataplex_TaskExecutionSpec;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  Notebook?: Dataplex_TaskNotebook;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The task Id of the task.
  TaskId?: string;
}
export class Task extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The lake in which the task will be created in.
  public Lake?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public Notebook?: Dataplex_TaskNotebook;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The task Id of the task.
  public TaskId?: string;

  /*
(Output)
Last update time of the status.
*/
  public UpdateTime?: string;

  // The time when the task was created.
  public CreateTime?: string;

  // User friendly display name.
  public DisplayName?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public Spark?: Dataplex_TaskSpark;

  /*
(Output)
The relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.
*/
  public Name?: string;

  /*
(Output)
System generated globally unique ID for the job.
*/
  public Uid?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public ExecutionSpec?: Dataplex_TaskExecutionSpec;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public ExecutionStatuses?: Array<Dataplex_TaskExecutionStatus>;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
(Output)
Execution state for the job.
*/
  public State?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public TriggerSpec?: Dataplex_TaskTriggerSpec;

  // User-provided description of the task.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The location in which the task will be created in.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "TriggerSpec",
        "Configuration for the cluster\nStructure is documented below.",
        Dataplex_TaskTriggerSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Spark",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        Dataplex_TaskSpark_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location in which the task will be created in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of the task.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ExecutionSpec",
        "Configuration for the cluster\nStructure is documented below.",
        Dataplex_TaskExecutionSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels for the task.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Notebook",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        Dataplex_TaskNotebook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Lake",
        "The lake in which the task will be created in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TaskId",
        "The task Id of the task.",
        [],
        false,
        true,
      ),
    ];
  }
}
