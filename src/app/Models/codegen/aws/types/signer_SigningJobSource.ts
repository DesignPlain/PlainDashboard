import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  signer_SigningJobSourceS3,
  signer_SigningJobSourceS3_GetTypes,
} from "./signer_SigningJobSourceS3";

export interface signer_SigningJobSource {
  // A configuration block describing the S3 Source object: See S3 Source below for details.
  s3?: signer_SigningJobSourceS3;
}

export function signer_SigningJobSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "A configuration block describing the S3 Source object: See S3 Source below for details.",
      () => signer_SigningJobSourceS3_GetTypes(),
      true,
      true,
    ),
  ];
}
