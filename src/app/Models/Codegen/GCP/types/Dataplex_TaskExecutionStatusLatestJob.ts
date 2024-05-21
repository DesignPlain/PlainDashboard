import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_TaskExecutionStatusLatestJob {
  /*
(Output)
The underlying service running a job.
*/
  service?: string;

  // The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  startTime?: string;

  /*
(Output)
System generated globally unique ID for the job.
*/
  uid?: string;

  /*
(Output)
The time when the job ended.
*/
  endTime?: string;

  /*
(Output)
The number of times the job has been retried (excluding the initial attempt).
*/
  retryCount?: number;

  /*
(Output)
The full resource name for the job run under a particular service.
*/
  serviceJob?: string;

  /*
(Output)
Execution state for the job.
*/
  state?: string;

  /*
(Output)
Additional information about the current state.
*/
  message?: string;

  /*
(Output)
The relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.
*/
  name?: string;
}

export function dataplex_TaskExecutionStatusLatestJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "uid",
      "(Output)\nSystem generated globally unique ID for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryCount",
      "(Output)\nThe number of times the job has been retried (excluding the initial attempt).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceJob",
      "(Output)\nThe full resource name for the job run under a particular service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "(Output)\nAdditional information about the current state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "(Output)\nThe underlying service running a job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "(Output)\nThe relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "(Output)\nThe time when the job ended.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nExecution state for the job.",
      [],
      false,
      false,
    ),
  ];
}
