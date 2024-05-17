import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceTemplateDiskDiskEncryptionKey {
  // The self link of the encryption key that is stored in Google Cloud KMS
  KmsKeySelfLink?: string;
}

export function Compute_RegionInstanceTemplateDiskDiskEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The self link of the encryption key that is stored in Google Cloud KMS",
      [],
      true,
      true,
    ),
  ];
}
