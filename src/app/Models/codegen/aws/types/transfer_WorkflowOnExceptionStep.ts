import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_WorkflowOnExceptionStepCopyStepDetails,
  transfer_WorkflowOnExceptionStepCopyStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepCopyStepDetails";
import {
  transfer_WorkflowOnExceptionStepCustomStepDetails,
  transfer_WorkflowOnExceptionStepCustomStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepCustomStepDetails";
import {
  transfer_WorkflowOnExceptionStepDecryptStepDetails,
  transfer_WorkflowOnExceptionStepDecryptStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepDecryptStepDetails";
import {
  transfer_WorkflowOnExceptionStepDeleteStepDetails,
  transfer_WorkflowOnExceptionStepDeleteStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepDeleteStepDetails";
import {
  transfer_WorkflowOnExceptionStepTagStepDetails,
  transfer_WorkflowOnExceptionStepTagStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepTagStepDetails";

export interface transfer_WorkflowOnExceptionStep {
  // Details for a step that deletes the file.
  deleteStepDetails?: transfer_WorkflowOnExceptionStepDeleteStepDetails;

  // Details for a step that creates one or more tags.
  tagStepDetails?: transfer_WorkflowOnExceptionStepTagStepDetails;

  //
  type?: string;

  // Details for a step that performs a file copy. See Copy Step Details below.
  copyStepDetails?: transfer_WorkflowOnExceptionStepCopyStepDetails;

  // Details for a step that invokes a lambda function.
  customStepDetails?: transfer_WorkflowOnExceptionStepCustomStepDetails;

  // Details for a step that decrypts the file.
  decryptStepDetails?: transfer_WorkflowOnExceptionStepDecryptStepDetails;
}

export function transfer_WorkflowOnExceptionStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "deleteStepDetails",
      "Details for a step that deletes the file.",
      () => transfer_WorkflowOnExceptionStepDeleteStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tagStepDetails",
      "Details for a step that creates one or more tags.",
      () => transfer_WorkflowOnExceptionStepTagStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, true),
    new DynamicUIProps(
      InputType.Object,
      "copyStepDetails",
      "Details for a step that performs a file copy. See Copy Step Details below.",
      () => transfer_WorkflowOnExceptionStepCopyStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customStepDetails",
      "Details for a step that invokes a lambda function.",
      () => transfer_WorkflowOnExceptionStepCustomStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "decryptStepDetails",
      "Details for a step that decrypts the file.",
      () => transfer_WorkflowOnExceptionStepDecryptStepDetails_GetTypes(),
      false,
      true,
    ),
  ];
}
