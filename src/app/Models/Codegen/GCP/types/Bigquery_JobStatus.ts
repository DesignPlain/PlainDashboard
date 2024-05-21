import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_JobStatusErrorResult,
  bigquery_JobStatusErrorResult_GetTypes,
} from "./bigquery_JobStatusErrorResult";
import {
  bigquery_JobStatusError,
  bigquery_JobStatusError_GetTypes,
} from "./bigquery_JobStatusError";

export interface bigquery_JobStatus {
  /*
(Output)
Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
Structure is documented below.
*/
  errorResults?: Array<bigquery_JobStatusErrorResult>;

  /*
(Output)
The first errors encountered during the running of the job. The final message
includes the number of errors that caused the process to stop. Errors here do
not necessarily mean that the job has not completed or was unsuccessful.
Structure is documented below.
*/
  errors?: Array<bigquery_JobStatusError>;

  /*
(Output)
Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
*/
  state?: string;
}

export function bigquery_JobStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "errorResults",
      "(Output)\nFinal error result of the job. If present, indicates that the job has completed and was unsuccessful.\nStructure is documented below.",
      bigquery_JobStatusErrorResult_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "errors",
      "(Output)\nThe first errors encountered during the running of the job. The final message\nincludes the number of errors that caused the process to stop. Errors here do\nnot necessarily mean that the job has not completed or was unsuccessful.\nStructure is documented below.",
      bigquery_JobStatusError_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nRunning state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.",
      [],
      false,
      false,
    ),
  ];
}
