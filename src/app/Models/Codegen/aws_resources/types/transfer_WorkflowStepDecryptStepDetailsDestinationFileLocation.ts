import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation,
  transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation_GetTypes,
} from "./transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation";
import {
  transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation,
  transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation_GetTypes,
} from "./transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation";

export interface transfer_WorkflowStepDecryptStepDetailsDestinationFileLocation {
  // Specifies the details for the EFS file being copied.
  efsFileLocation?: transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation;

  // Specifies the details for the S3 file being copied.
  s3FileLocation?: transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileLocation",
      "Specifies the details for the EFS file being copied.",
      transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3FileLocation",
      "Specifies the details for the S3 file being copied.",
      transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation_GetTypes(),
      false,
      true,
    ),
  ];
}
