import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  organizations_getIAMPolicyAuditConfigAuditLogConfig,
  organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes,
} from "./organizations_getIAMPolicyAuditConfigAuditLogConfig";

export interface organizations_getIAMPolicyAuditConfig {
  // A nested block that defines the operations you'd like to log.
  auditLogConfigs?: Array<organizations_getIAMPolicyAuditConfigAuditLogConfig>;

  // Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
  service?: string;
}

export function organizations_getIAMPolicyAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "auditLogConfigs",
      "A nested block that defines the operations you'd like to log.",
      () => organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.",
      () => [],
      true,
      false,
    ),
  ];
}
