import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface efs_FileSystemProtection {
  // Indicates whether replication overwrite protection is enabled. Valid values: `ENABLED` or `DISABLED`.
  replicationOverwrite?: string;
}

export function efs_FileSystemProtection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "replicationOverwrite",
      "Indicates whether replication overwrite protection is enabled. Valid values: `ENABLED` or `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
