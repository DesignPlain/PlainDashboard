import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation {
  // Specifies the S3 bucket for the customer input file.
  bucket?: string;

  // The name assigned to the tag that you create.
  key?: string;
}

export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationS3FileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Specifies the S3 bucket for the customer input file.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name assigned to the tag that you create.",
      [],
      false,
      true,
    ),
  ];
}
