import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface projects_IAMAuditConfigAuditLogConfig {
  // Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.
  exemptedMembers?: Array<string>;

  // Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.
  logType?: string;
}

export function projects_IAMAuditConfigAuditLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'exemptedMembers',
      'Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logType',
      'Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.',
      () => [],
      true,
      false,
    ),
  ];
}
