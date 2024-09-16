import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_getIAMPolicyAuditConfigAuditLogConfig {
  // Specifies the identities that are exempt from these types of logging operations. Follows the same format of the `members` array for `binding`.
  exemptedMembers?: Array<string>;

  // Defines the logging level. `DATA_READ`, `DATA_WRITE` and `ADMIN_READ` capture different types of events. See [the audit configuration documentation](https://cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig) for more details.
  logType?: string;
}

export function organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'exemptedMembers',
      'Specifies the identities that are exempt from these types of logging operations. Follows the same format of the `members` array for `binding`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logType',
      'Defines the logging level. `DATA_READ`, `DATA_WRITE` and `ADMIN_READ` capture different types of events. See [the audit configuration documentation](https://cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig) for more details.',
      () => [],
      true,
      false,
    ),
  ];
}
