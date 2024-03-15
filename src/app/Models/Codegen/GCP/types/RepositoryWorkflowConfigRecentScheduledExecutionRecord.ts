import { RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus } from "./RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus";

export interface RepositoryWorkflowConfigRecentScheduledExecutionRecord {
  /*
(Output)
The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.
Structure is documented below.
*/
  ErrorStatuses?: Array<RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus>;

  /*
(Output)
The timestamp of this workflow attempt.
*/
  ExecutionTime?: string;

  /*
(Output)
The name of the created workflow invocation, if one was successfully created. In the format projects/-/locations/-/repositories/-/workflowInvocations/-.
*/
  WorkflowInvocation?: string;
}
