export interface TaskExecutionStatusLatestJob {
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
The full resource name for the job run under a particular service.
*/
  ServiceJob?: string;

  /*
(Output)
Execution state for the job.
*/
  State?: string;

  /*
(Output)
The number of times the job has been retried (excluding the initial attempt).
*/
  RetryCount?: number;

  /*
(Output)
The underlying service running a job.
*/
  Service?: string;

  // The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  StartTime?: string;

  /*
(Output)
System generated globally unique ID for the job.
*/
  Uid?: string;
}
