import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  signer_getSigningJobSignedObjectS3,
  signer_getSigningJobSignedObjectS3_GetTypes,
} from "./signer_getSigningJobSignedObjectS3";

export interface signer_getSigningJobSignedObject {
  //
  s3s?: Array<signer_getSigningJobSignedObjectS3>;
}

export function signer_getSigningJobSignedObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "s3s",
      "",
      signer_getSigningJobSignedObjectS3_GetTypes(),
      true,
      false,
    ),
  ];
}
