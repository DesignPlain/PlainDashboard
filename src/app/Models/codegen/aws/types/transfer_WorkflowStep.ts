import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_WorkflowStepCustomStepDetails,
  transfer_WorkflowStepCustomStepDetails_GetTypes,
} from "./transfer_WorkflowStepCustomStepDetails";
import {
  transfer_WorkflowStepDecryptStepDetails,
  transfer_WorkflowStepDecryptStepDetails_GetTypes,
} from "./transfer_WorkflowStepDecryptStepDetails";
import {
  transfer_WorkflowStepDeleteStepDetails,
  transfer_WorkflowStepDeleteStepDetails_GetTypes,
} from "./transfer_WorkflowStepDeleteStepDetails";
import {
  transfer_WorkflowStepTagStepDetails,
  transfer_WorkflowStepTagStepDetails_GetTypes,
} from "./transfer_WorkflowStepTagStepDetails";
import {
  transfer_WorkflowStepCopyStepDetails,
  transfer_WorkflowStepCopyStepDetails_GetTypes,
} from "./transfer_WorkflowStepCopyStepDetails";

export interface transfer_WorkflowStep {
  // Details for a step that performs a file copy. See Copy Step Details below.
  copyStepDetails?: transfer_WorkflowStepCopyStepDetails;

  // Details for a step that invokes a lambda function.
  customStepDetails?: transfer_WorkflowStepCustomStepDetails;

  // Details for a step that decrypts the file.
  decryptStepDetails?: transfer_WorkflowStepDecryptStepDetails;

  // Details for a step that deletes the file.
  deleteStepDetails?: transfer_WorkflowStepDeleteStepDetails;

  // Details for a step that creates one or more tags.
  tagStepDetails?: transfer_WorkflowStepTagStepDetails;

  //
  type?: string;
}

export function transfer_WorkflowStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customStepDetails",
      "Details for a step that invokes a lambda function.",
      () => transfer_WorkflowStepCustomStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "decryptStepDetails",
      "Details for a step that decrypts the file.",
      () => transfer_WorkflowStepDecryptStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deleteStepDetails",
      "Details for a step that deletes the file.",
      () => transfer_WorkflowStepDeleteStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tagStepDetails",
      "Details for a step that creates one or more tags.",
      () => transfer_WorkflowStepTagStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, true),
    new DynamicUIProps(
      InputType.Object,
      "copyStepDetails",
      "Details for a step that performs a file copy. See Copy Step Details below.",
      () => transfer_WorkflowStepCopyStepDetails_GetTypes(),
      false,
      true,
    ),
  ];
}
