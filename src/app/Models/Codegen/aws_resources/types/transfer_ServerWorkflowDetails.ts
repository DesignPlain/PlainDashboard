import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  transfer_ServerWorkflowDetailsOnPartialUpload,
  transfer_ServerWorkflowDetailsOnPartialUpload_GetTypes,
} from "./transfer_ServerWorkflowDetailsOnPartialUpload";
import {
  transfer_ServerWorkflowDetailsOnUpload,
  transfer_ServerWorkflowDetailsOnUpload_GetTypes,
} from "./transfer_ServerWorkflowDetailsOnUpload";

export interface transfer_ServerWorkflowDetails {
  // A trigger that starts a workflow if a file is only partially uploaded. See Workflow Detail below.
  onPartialUpload?: transfer_ServerWorkflowDetailsOnPartialUpload;

  // A trigger that starts a workflow: the workflow begins to execute after a file is uploaded. See Workflow Detail below.
  onUpload?: transfer_ServerWorkflowDetailsOnUpload;
}

export function transfer_ServerWorkflowDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "onPartialUpload",
      "A trigger that starts a workflow if a file is only partially uploaded. See Workflow Detail below.",
      transfer_ServerWorkflowDetailsOnPartialUpload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "onUpload",
      "A trigger that starts a workflow: the workflow begins to execute after a file is uploaded. See Workflow Detail below.",
      transfer_ServerWorkflowDetailsOnUpload_GetTypes(),
      false,
      false,
    ),
  ];
}
