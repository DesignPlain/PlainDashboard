import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface signer_getSigningJobSourceS3 {
  //
  bucket?: string;

  //
  key?: string;

  //
  version?: string;
}

export function signer_getSigningJobSourceS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "key", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "version", "", () => [], true, false),
  ];
}
