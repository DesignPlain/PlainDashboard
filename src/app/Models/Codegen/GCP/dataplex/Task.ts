import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TaskExecutionSpec } from "../types/TaskExecutionSpec";
import { TaskNotebook } from "../types/TaskNotebook";
import { TaskExecutionStatus } from "../types/TaskExecutionStatus";
import { TaskSpark } from "../types/TaskSpark";
import { TaskTriggerSpec } from "../types/TaskTriggerSpec";

export interface TaskArgs {
  // User-provided description of the task.
  Description?: string;

  // User friendly display name.
  DisplayName?: string;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The lake in which the task will be created in.
  Lake?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  Spark?: TaskSpark;

  /*
Configuration for the cluster
Structure is documented below.
*/
  TriggerSpec?: TaskTriggerSpec;

  /*
Configuration for the cluster
Structure is documented below.
*/
  ExecutionSpec?: TaskExecutionSpec;

  // The location in which the task will be created in.
  Location?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  Notebook?: TaskNotebook;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The task Id of the task.
  TaskId?: string;
}
export class Task extends Resource {
  // User friendly display name.
  public DisplayName?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public ExecutionSpec?: TaskExecutionSpec;

  // The lake in which the task will be created in.
  public Lake?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public Spark?: TaskSpark;

  // User-provided description of the task.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The task Id of the task.
  public TaskId?: string;

  /*
(Output)
System generated globally unique ID for the job.
*/
  public Uid?: string;

  /*
(Output)
Last update time of the status.
*/
  public UpdateTime?: string;

  /*
(Output)
Execution state for the job.
*/
  public State?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public TriggerSpec?: TaskTriggerSpec;

  // The time when the task was created.
  public CreateTime?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public ExecutionStatuses?: Array<TaskExecutionStatus>;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location in which the task will be created in.
  public Location?: string;

  /*
(Output)
The relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.
*/
  public Name?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public Notebook?: TaskNotebook;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of the task.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location in which the task will be created in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Notebook",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TaskId",
        "The task Id of the task.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User friendly display name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the task.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Lake",
        "The lake in which the task will be created in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Spark",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TriggerSpec",
        "Configuration for the cluster\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ExecutionSpec",
        "Configuration for the cluster\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
