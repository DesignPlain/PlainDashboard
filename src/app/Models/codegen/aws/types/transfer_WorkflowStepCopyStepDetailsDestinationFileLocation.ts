import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation,
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes,
} from "./transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation";
import {
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation,
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes,
} from "./transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation";

export interface transfer_WorkflowStepCopyStepDetailsDestinationFileLocation {
  // Specifies the details for the EFS file being copied.
  efsFileLocation?: transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation;

  // Specifies the details for the S3 file being copied.
  s3FileLocation?: transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transfer_WorkflowStepCopyStepDetailsDestinationFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileLocation",
      "Specifies the details for the EFS file being copied.",
      () =>
        transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3FileLocation",
      "Specifies the details for the S3 file being copied.",
      () =>
        transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes(),
      false,
      true,
    ),
  ];
}
