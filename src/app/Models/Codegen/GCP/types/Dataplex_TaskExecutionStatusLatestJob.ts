import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_TaskExecutionStatusLatestJob {
  /*
(Output)
The number of times the job has been retried (excluding the initial attempt).
*/
  RetryCount?: number;

  /*
(Output)
The full resource name for the job run under a particular service.
*/
  ServiceJob?: string;

  // The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  StartTime?: string;

  /*
(Output)
Execution state for the job.
*/
  State?: string;

  /*
(Output)
The time when the job ended.
*/
  EndTime?: string;

  /*
(Output)
Additional information about the current state.
*/
  Message?: string;

  /*
(Output)
The relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.
*/
  Name?: string;

  /*
(Output)
The underlying service running a job.
*/
  Service?: string;

  /*
(Output)
System generated globally unique ID for the job.
*/
  Uid?: string;
}

export function Dataplex_TaskExecutionStatusLatestJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "RetryCount",
      "(Output)\nThe number of times the job has been retried (excluding the initial attempt).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceJob",
      "(Output)\nThe full resource name for the job run under a particular service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "(Output)\nThe underlying service running a job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uid",
      "(Output)\nSystem generated globally unique ID for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nExecution state for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EndTime",
      "(Output)\nThe time when the job ended.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nAdditional information about the current state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "(Output)\nThe relative resource name of the job, of the form: projects/{project_number}/locations/{locationId}/lakes/{lakeId}/tasks/{taskId}/jobs/{jobId}.",
      [],
      false,
      false,
    ),
  ];
}
