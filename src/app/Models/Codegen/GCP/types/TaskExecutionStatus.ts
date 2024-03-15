import { TaskExecutionStatusLatestJob } from "./TaskExecutionStatusLatestJob";

export interface TaskExecutionStatus {
  /*
(Output)
latest job execution.
Structure is documented below.
*/
  LatestJobs?: Array<TaskExecutionStatusLatestJob>;

  /*
(Output)
Last update time of the status.
*/
  UpdateTime?: string;
}
