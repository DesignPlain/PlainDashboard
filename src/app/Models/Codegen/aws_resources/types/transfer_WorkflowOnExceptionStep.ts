import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
import {
  transfer_WorkflowOnExceptionStepCopyStepDetails,
  transfer_WorkflowOnExceptionStepCopyStepDetails_GetTypes,
} from "./transfer_WorkflowOnExceptionStepCopyStepDetails";

export interface transfer_WorkflowOnExceptionStep {
  // Details for a step that invokes a lambda function.
  customStepDetails?: transfer_WorkflowOnExceptionStepCustomStepDetails;

  // Details for a step that decrypts the file.
  decryptStepDetails?: transfer_WorkflowOnExceptionStepDecryptStepDetails;

  // Details for a step that deletes the file.
  deleteStepDetails?: transfer_WorkflowOnExceptionStepDeleteStepDetails;

  // Details for a step that creates one or more tags.
  tagStepDetails?: transfer_WorkflowOnExceptionStepTagStepDetails;

  // The type of encryption used. Currently, this value must be `"PGP"`.
  type?: string;

  // Details for a step that performs a file copy. See Copy Step Details below.
  copyStepDetails?: transfer_WorkflowOnExceptionStepCopyStepDetails;
}

export function transfer_WorkflowOnExceptionStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      'The type of encryption used. Currently, this value must be `"PGP"`.',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "copyStepDetails",
      "Details for a step that performs a file copy. See Copy Step Details below.",
      transfer_WorkflowOnExceptionStepCopyStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customStepDetails",
      "Details for a step that invokes a lambda function.",
      transfer_WorkflowOnExceptionStepCustomStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "decryptStepDetails",
      "Details for a step that decrypts the file.",
      transfer_WorkflowOnExceptionStepDecryptStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deleteStepDetails",
      "Details for a step that deletes the file.",
      transfer_WorkflowOnExceptionStepDeleteStepDetails_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tagStepDetails",
      "Details for a step that creates one or more tags.",
      transfer_WorkflowOnExceptionStepTagStepDetails_GetTypes(),
      false,
      true,
    ),
  ];
}
