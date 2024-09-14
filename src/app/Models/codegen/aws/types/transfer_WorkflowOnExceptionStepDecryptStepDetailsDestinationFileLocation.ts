import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation,
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation_GetTypes,
} from "./transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation";
import {
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation,
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation_GetTypes,
} from "./transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation";

export interface transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation {
  // Specifies the details for the EFS file being copied.
  efsFileLocation?: transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation;

  // Specifies the details for the S3 file being copied.
  s3FileLocation?: transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileLocation",
      "Specifies the details for the EFS file being copied.",
      () =>
        transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3FileLocation",
      "Specifies the details for the S3 file being copied.",
      () =>
        transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocationS3FileLocation_GetTypes(),
      false,
      false,
    ),
  ];
}
