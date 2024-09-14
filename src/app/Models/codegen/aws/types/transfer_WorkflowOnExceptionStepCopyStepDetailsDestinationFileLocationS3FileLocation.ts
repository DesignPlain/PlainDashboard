import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation {
  // The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
  key?: string;

  // Specifies the S3 bucket for the customer input file.
  bucket?: string;
}

export function transfer_WorkflowOnExceptionStepCopyStepDetailsDestinationFileLocationS3FileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Specifies the S3 bucket for the customer input file.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name assigned to the file when it was created in S3. You use the object key to retrieve the object.",
      () => [],
      false,
      true,
    ),
  ];
}
