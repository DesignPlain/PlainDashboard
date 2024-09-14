import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storage_TransferJobTransferSpecGcsDataSink {
  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  path?: string;

  // Google Cloud Storage bucket name.
  bucketName?: string;
}

export function storage_TransferJobTransferSpecGcsDataSink_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Google Cloud Storage bucket name.",
      () => [],
      true,
      false,
    ),
  ];
}