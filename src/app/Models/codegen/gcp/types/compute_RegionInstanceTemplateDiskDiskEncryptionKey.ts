import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionInstanceTemplateDiskDiskEncryptionKey {
  // The self link of the encryption key that is stored in Google Cloud KMS
  kmsKeySelfLink?: string;
}

export function compute_RegionInstanceTemplateDiskDiskEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self link of the encryption key that is stored in Google Cloud KMS",
      () => [],
      true,
      true,
    ),
  ];
}
