import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferJobTransferSpecGcsDataSink {
  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  Path?: string;

  // Google Cloud Storage bucket name.
  BucketName?: string;
}

export function Storage_TransferJobTransferSpecGcsDataSink_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BucketName",
      "Google Cloud Storage bucket name.",
      [],
      true,
      false,
    ),
  ];
}
