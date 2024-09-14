import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  signer_SigningJobSignedObjectS3,
  signer_SigningJobSignedObjectS3_GetTypes,
} from "./signer_SigningJobSignedObjectS3";

export interface signer_SigningJobSignedObject {
  //
  s3s?: Array<signer_SigningJobSignedObjectS3>;
}

export function signer_SigningJobSignedObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "s3s",
      "",
      () => signer_SigningJobSignedObjectS3_GetTypes(),
      false,
      false,
    ),
  ];
}
