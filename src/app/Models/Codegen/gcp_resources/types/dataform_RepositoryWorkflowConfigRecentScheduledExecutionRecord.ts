import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus,
  dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus_GetTypes,
} from "./dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus";

export interface dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord {
  /*
(Output)
The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.
Structure is documented below.
*/
  errorStatuses?: Array<dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus>;

  /*
(Output)
The timestamp of this workflow attempt.
*/
  executionTime?: string;

  /*
(Output)
The name of the created workflow invocation, if one was successfully created. In the format projects/-/locations/-/repositories/-/workflowInvocations/-.
*/
  workflowInvocation?: string;
}

export function dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "errorStatuses",
      "(Output)\nThe error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.\nStructure is documented below.",
      dataform_RepositoryWorkflowConfigRecentScheduledExecutionRecordErrorStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionTime",
      "(Output)\nThe timestamp of this workflow attempt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workflowInvocation",
      "(Output)\nThe name of the created workflow invocation, if one was successfully created. In the format projects/*/locations/*/repositories/*/workflowInvocations/*.",
      [],
      false,
      false,
    ),
  ];
}
