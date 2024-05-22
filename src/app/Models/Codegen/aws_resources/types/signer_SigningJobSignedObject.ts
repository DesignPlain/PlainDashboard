import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  signer_SigningJobSignedObjectS3,
  signer_SigningJobSignedObjectS3_GetTypes,
} from "./signer_SigningJobSignedObjectS3";

export interface signer_SigningJobSignedObject {
  // A configuration block describing the S3 Destination object: See S3 Destination below for details.
  s3s?: Array<signer_SigningJobSignedObjectS3>;
}

export function signer_SigningJobSignedObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "s3s",
      "A configuration block describing the S3 Destination object: See S3 Destination below for details.",
      signer_SigningJobSignedObjectS3_GetTypes(),
      false,
      false,
    ),
  ];
}
