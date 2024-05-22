import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation,
  transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes,
} from "./transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation";
import {
  transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation,
  transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes,
} from "./transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation";

export interface transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation {
  // Specifies the details for the EFS file being copied.
  efsFileLocation?: transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation;

  // Specifies the details for the S3 file being copied.
  s3FileLocation?: transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "efsFileLocation",
      "Specifies the details for the EFS file being copied.",
      transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3FileLocation",
      "Specifies the details for the S3 file being copied.",
      transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes(),
      false,
      true,
    ),
  ];
}
