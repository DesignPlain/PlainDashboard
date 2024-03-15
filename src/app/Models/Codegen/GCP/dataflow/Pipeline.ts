import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PipelineScheduleInfo } from "../types/PipelineScheduleInfo";
import { PipelineWorkload } from "../types/PipelineWorkload";

export interface PipelineArgs {
  /*
The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  PipelineSources?: Map<string, string>;

  // Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.
  SchedulerServiceAccountEmail?: string;

  /*
The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state
Possible values are: `STATE_UNSPECIFIED`, `STATE_RESUMING`, `STATE_ACTIVE`, `STATE_STOPPING`, `STATE_ARCHIVED`, `STATE_PAUSED`.


- - -
*/
  State?: string;

  /*
Workload information for creating new jobs.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#workload
Structure is documented below.
*/
  Workload?: PipelineWorkload;

  // The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the region
  Region?: string;

  /*
Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#schedulespec
Structure is documented below.
*/
  ScheduleInfo?: PipelineScheduleInfo;

  /*
The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype
Possible values are: `PIPELINE_TYPE_UNSPECIFIED`, `PIPELINE_TYPE_BATCH`, `PIPELINE_TYPE_STREAMING`.
*/
  Type?: string;

  /*
"The pipeline name. For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."
*/
  Name?: string;
}
export class Pipeline extends Resource {
  // Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.
  public SchedulerServiceAccountEmail?: string;

  /*
The timestamp when the pipeline was initially created. Set by the Data Pipelines service.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).
  public DisplayName?: string;

  // Number of jobs.
  public JobCount?: number;

  /*
The timestamp when the pipeline was last modified. Set by the Data Pipelines service.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public LastUpdateTime?: string;

  /*
Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#schedulespec
Structure is documented below.
*/
  public ScheduleInfo?: PipelineScheduleInfo;

  /*
The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype
Possible values are: `PIPELINE_TYPE_UNSPECIFIED`, `PIPELINE_TYPE_BATCH`, `PIPELINE_TYPE_STREAMING`.
*/
  public Type?: string;

  /*
Workload information for creating new jobs.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#workload
Structure is documented below.
*/
  public Workload?: PipelineWorkload;

  /*
"The pipeline name. For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."
*/
  public Name?: string;

  /*
The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  public PipelineSources?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A reference to the region
  public Region?: string;

  /*
The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state
Possible values are: `STATE_UNSPECIFIED`, `STATE_RESUMING`, `STATE_ACTIVE`, `STATE_STOPPING`, `STATE_ARCHIVED`, `STATE_PAUSED`.


- - -
*/
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PipelineSources",
        'The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      ),
      new DynamicUIProps(
        InputType.String,
        "State",
        "The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state\nPossible values are: `STATE_UNSPECIFIED`, `STATE_RESUMING`, `STATE_ACTIVE`, `STATE_STOPPING`, `STATE_ARCHIVED`, `STATE_PAUSED`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ScheduleInfo",
        "Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#schedulespec\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        '"The pipeline name. For example\': \'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."\n"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."\n"LOCATION_ID is the canonical ID for the pipeline\'s location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it\'s only available in App Engine regions."\n"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."',
      ),
      new DynamicUIProps(
        InputType.String,
        "SchedulerServiceAccountEmail",
        "Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Workload",
        "Workload information for creating new jobs.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#workload\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype\nPossible values are: `PIPELINE_TYPE_UNSPECIFIED`, `PIPELINE_TYPE_BATCH`, `PIPELINE_TYPE_STREAMING`.",
      ),
    ];
  }
}
