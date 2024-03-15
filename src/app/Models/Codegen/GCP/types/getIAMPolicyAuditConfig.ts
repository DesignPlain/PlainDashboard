import { getIAMPolicyAuditConfigAuditLogConfig } from "./getIAMPolicyAuditConfigAuditLogConfig";

export interface getIAMPolicyAuditConfig {
  // A nested block that defines the operations you'd like to log.
  AuditLogConfigs?: Array<getIAMPolicyAuditConfigAuditLogConfig>;

  // Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
  Service?: string;
}
