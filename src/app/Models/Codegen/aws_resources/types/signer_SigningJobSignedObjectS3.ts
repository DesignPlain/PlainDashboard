import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface signer_SigningJobSignedObjectS3 {
  // Name of the S3 bucket.
  bucket?: string;

  // Key name of the object that contains your unsigned code.
  key?: string;
}

export function signer_SigningJobSignedObjectS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key name of the object that contains your unsigned code.",
      [],
      false,
      false,
    ),
  ];
}
