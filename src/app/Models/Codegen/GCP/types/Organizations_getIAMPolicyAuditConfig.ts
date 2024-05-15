import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_getIAMPolicyAuditConfigAuditLogConfig,
  Organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes,
} from "./Organizations_getIAMPolicyAuditConfigAuditLogConfig";

export interface Organizations_getIAMPolicyAuditConfig {
  // A nested block that defines the operations you'd like to log.
  AuditLogConfigs?: Array<Organizations_getIAMPolicyAuditConfigAuditLogConfig>;

  // Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
  Service?: string;
}

export function Organizations_getIAMPolicyAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AuditLogConfigs",
      "A nested block that defines the operations you'd like to log.",
      Organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.",
      [],
      true,
      false,
    ),
  ];
}
