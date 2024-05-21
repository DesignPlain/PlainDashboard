import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_TaskExecutionSpec,
  dataplex_TaskExecutionSpec_GetTypes,
} from "../types/dataplex_TaskExecutionSpec";
import {
  dataplex_TaskSpark,
  dataplex_TaskSpark_GetTypes,
} from "../types/dataplex_TaskSpark";
import {
  dataplex_TaskTriggerSpec,
  dataplex_TaskTriggerSpec_GetTypes,
} from "../types/dataplex_TaskTriggerSpec";
import {
  dataplex_TaskNotebook,
  dataplex_TaskNotebook_GetTypes,
} from "../types/dataplex_TaskNotebook";
import {
  dataplex_TaskExecutionStatus,
  dataplex_TaskExecutionStatus_GetTypes,
} from "../types/dataplex_TaskExecutionStatus";

export interface TaskArgs {
  /*
Configuration for the cluster
Structure is documented below.
*/
  executionSpec?: dataplex_TaskExecutionSpec;

  // The location in which the task will be created in.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  spark?: dataplex_TaskSpark;

  // The task Id of the task.
  taskId?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  triggerSpec?: dataplex_TaskTriggerSpec;

  // User friendly display name.
  displayName?: string;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The lake in which the task will be created in.
  lake?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  notebook?: dataplex_TaskNotebook;

  // User-provided description of the task.
  description?: string;
}
export class Task extends Resource {
  /*
(Output)
The relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
(Output)
Execution state for the job.
*/
  public state?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public triggerSpec?: dataplex_TaskTriggerSpec;

  /*
User-defined labels for the task.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // User-provided description of the task.
  public description?: string;

  // User friendly display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public executionStatuses?: Array<dataplex_TaskExecutionStatus>;

  // The lake in which the task will be created in.
  public lake?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public spark?: dataplex_TaskSpark;

  // The time when the task was created.
  public createTime?: string;

  // The task Id of the task.
  public taskId?: string;

  // The location in which the task will be created in.
  public location?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public notebook?: dataplex_TaskNotebook;

  /*
(Output)
System generated globally unique ID for the job.
*/
  public uid?: string;

  /*
(Output)
Last update time of the status.
*/
  public updateTime?: string;

  /*
Configuration for the cluster
Structure is documented below.
*/
  public executionSpec?: dataplex_TaskExecutionSpec;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "executionSpec",
        "Configuration for the cluster\nStructure is documented below.",
        dataplex_TaskExecutionSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location in which the task will be created in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spark",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        dataplex_TaskSpark_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "triggerSpec",
        "Configuration for the cluster\nStructure is documented below.",
        dataplex_TaskTriggerSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notebook",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        dataplex_TaskNotebook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "taskId",
        "The task Id of the task.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for the task.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lake",
        "The lake in which the task will be created in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description of the task.",
        [],
        false,
        false,
      ),
    ];
  }
}
