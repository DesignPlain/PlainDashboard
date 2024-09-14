import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_ServerWorkflowDetailsOnUpload {
  // Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources.
  executionRole?: string;

  // A unique identifier for the workflow.
  workflowId?: string;
}

export function transfer_ServerWorkflowDetailsOnUpload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "executionRole",
      "Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workflowId",
      "A unique identifier for the workflow.",
      () => [],
      true,
      false,
    ),
  ];
}
