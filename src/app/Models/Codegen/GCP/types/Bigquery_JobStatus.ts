import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_JobStatusErrorResult,
  Bigquery_JobStatusErrorResult_GetTypes,
} from "./Bigquery_JobStatusErrorResult";
import {
  Bigquery_JobStatusError,
  Bigquery_JobStatusError_GetTypes,
} from "./Bigquery_JobStatusError";

export interface Bigquery_JobStatus {
  /*
(Output)
Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
*/
  State?: string;

  /*
(Output)
Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
Structure is documented below.
*/
  ErrorResults?: Array<Bigquery_JobStatusErrorResult>;

  /*
(Output)
The first errors encountered during the running of the job. The final message
includes the number of errors that caused the process to stop. Errors here do
not necessarily mean that the job has not completed or was unsuccessful.
Structure is documented below.
*/
  Errors?: Array<Bigquery_JobStatusError>;
}

export function Bigquery_JobStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nRunning state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ErrorResults",
      "(Output)\nFinal error result of the job. If present, indicates that the job has completed and was unsuccessful.\nStructure is documented below.",
      Bigquery_JobStatusErrorResult_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Errors",
      "(Output)\nThe first errors encountered during the running of the job. The final message\nincludes the number of errors that caused the process to stop. Errors here do\nnot necessarily mean that the job has not completed or was unsuccessful.\nStructure is documented below.",
      Bigquery_JobStatusError_GetTypes(),
      false,
      false,
    ),
  ];
}
