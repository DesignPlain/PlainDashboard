export interface IAMAuditConfigAuditLogConfig {
  // Identities that do not cause logging for this type of permission.  The format is the same as that for `members`.
  ExemptedMembers?: Array<string>;

  // Permission type for which logging is to be configured.  Must be one of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ`.
  LogType?: string;
}
