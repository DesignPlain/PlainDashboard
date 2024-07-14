import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation,
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes,
} from "./transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation";
import {
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation,
  transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes,
} from "./transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation";

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
      transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3FileLocation",
      "Specifies the details for the S3 file being copied.",
      transfer_WorkflowStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes(),
      false,
      true,
    ),
  ];
}
