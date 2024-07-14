import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface efs_BackupPolicyBackupPolicy {
  // A status of the backup policy. Valid values: `ENABLED`, `DISABLED`.
  status?: string;
}

export function efs_BackupPolicyBackupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "A status of the backup policy. Valid values: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
