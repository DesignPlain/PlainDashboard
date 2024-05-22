import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface folder_IamAuditConfigAuditLogConfig {
  // Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.
  exemptedMembers?: Array<string>;

  // Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.
  logType?: string;
}

export function folder_IamAuditConfigAuditLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logType",
      "Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exemptedMembers",
      "Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
