import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMAuditConfigAuditLogConfig } from "../types/IAMAuditConfigAuditLogConfig";

export interface IAMAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  Folder?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_folder\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  Service?: string;
}
export class IAMAuditConfig extends Resource {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  // (Computed) The etag of the folder's IAM policy.
  public Etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public Folder?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_folder\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "AuditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_folder\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
      ),
    ];
  }
}
