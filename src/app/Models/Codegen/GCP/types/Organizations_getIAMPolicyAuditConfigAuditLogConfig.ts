import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Organizations_getIAMPolicyAuditConfigAuditLogConfig {
  // Specifies the identities that are exempt from these types of logging operations. Follows the same format of the `members` array for `binding`.
  ExemptedMembers?: Array<string>;

  // Defines the logging level. `DATA_READ`, `DATA_WRITE` and `ADMIN_READ` capture different types of events. See [the audit configuration documentation](https://cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig) for more details.
  LogType?: string;
}

export function Organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LogType",
      "Defines the logging level. `DATA_READ`, `DATA_WRITE` and `ADMIN_READ` capture different types of events. See [the audit configuration documentation](https://cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig) for more details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExemptedMembers",
      "Specifies the identities that are exempt from these types of logging operations. Follows the same format of the `members` array for `binding`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
