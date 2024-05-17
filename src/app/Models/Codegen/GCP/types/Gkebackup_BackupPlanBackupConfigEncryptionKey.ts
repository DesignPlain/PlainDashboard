import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_BackupPlanBackupConfigEncryptionKey {
  // Google Cloud KMS encryption key. Format: projects/-/locations/-/keyRings/-/cryptoKeys/-
  GcpKmsEncryptionKey?: string;
}

export function Gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GcpKmsEncryptionKey",
      "Google Cloud KMS encryption key. Format: projects/*/locations/*/keyRings/*/cryptoKeys/*",
      [],
      true,
      false,
    ),
  ];
}
