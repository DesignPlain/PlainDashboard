import { JobStatusErrorResult } from "./JobStatusErrorResult";
import { JobStatusError } from "./JobStatusError";

export interface JobStatus {
  /*
(Output)
Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
Structure is documented below.
*/
  ErrorResults?: Array<JobStatusErrorResult>;

  /*
(Output)
The first errors encountered during the running of the job. The final message
includes the number of errors that caused the process to stop. Errors here do
not necessarily mean that the job has not completed or was unsuccessful.
Structure is documented below.
*/
  Errors?: Array<JobStatusError>;

  /*
(Output)
Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
*/
  State?: string;
}
