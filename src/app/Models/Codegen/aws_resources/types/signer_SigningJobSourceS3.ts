import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface signer_SigningJobSourceS3 {
  // Key name of the object that contains your unsigned code.
  key?: string;

  // Version of your source image in your version enabled S3 bucket.
  version?: string;

  // Name of the S3 bucket.
  bucket?: string;
}

export function signer_SigningJobSourceS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key name of the object that contains your unsigned code.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of your source image in your version enabled S3 bucket.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket.",
      [],
      true,
      true,
    ),
  ];
}
