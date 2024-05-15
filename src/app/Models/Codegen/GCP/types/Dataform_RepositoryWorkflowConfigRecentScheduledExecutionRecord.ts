import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus,
  Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus_GetTypes,
} from "./Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus";

export interface Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord {
  /*
(Output)
The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.
Structure is documented below.
*/
  ErrorStatuses?: Array<Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus>;

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

export function Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ErrorStatuses",
      "(Output)\nThe error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.\nStructure is documented below.",
      Dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionTime",
      "(Output)\nThe timestamp of this workflow attempt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkflowInvocation",
      "(Output)\nThe name of the created workflow invocation, if one was successfully created. In the format projects/*/locations/*/repositories/*/workflowInvocations/*.",
      [],
      false,
      false,
    ),
  ];
}
