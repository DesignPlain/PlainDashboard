import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface signer_getSigningJobSignedObjectS3 {
  //
  bucket?: string;

  //
  key?: string;
}

export function signer_getSigningJobSignedObjectS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", [], true, false),
    new DynamicUIProps(InputType.String, "key", "", [], true, false),
  ];
}
