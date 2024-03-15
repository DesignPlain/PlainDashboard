import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMAuditConfigAuditLogConfig } from "../types/IAMAuditConfigAuditLogConfig";

export interface IAMAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  // The numeric ID of the organization in which you want to manage the audit logging config.
  OrgId?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  Service?: string;
}
export class IAMAuditConfig extends Resource {
  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public Service?: string;

  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  // The etag of iam policy
  public Etag?: string;

  // The numeric ID of the organization in which you want to manage the audit logging config.
  public OrgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "AuditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization in which you want to manage the audit logging config.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_organization\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
      ),
    ];
  }
}
