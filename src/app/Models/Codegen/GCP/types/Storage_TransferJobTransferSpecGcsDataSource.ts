import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecGcsDataSource {
  // Google Cloud Storage bucket name.
  bucketName?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  path?: string;
}

export function storage_TransferJobTransferSpecGcsDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Google Cloud Storage bucket name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      [],
      false,
      false,
    ),
  ];
}
