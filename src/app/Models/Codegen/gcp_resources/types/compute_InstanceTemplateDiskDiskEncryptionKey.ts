import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceTemplateDiskDiskEncryptionKey {
  // The self link of the encryption key that is stored in Google Cloud KMS
  kmsKeySelfLink?: string;
}

export function compute_InstanceTemplateDiskDiskEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self link of the encryption key that is stored in Google Cloud KMS",
      [],
      true,
      true,
    ),
  ];
}