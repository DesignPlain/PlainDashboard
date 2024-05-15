import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Folder_IamAuditConfigAuditLogConfig {
  // Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.
  LogType?: string;

  // Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.
  ExemptedMembers?: Array<string>;
}

export function Folder_IamAuditConfigAuditLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LogType",
      "Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExemptedMembers",
      "Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
