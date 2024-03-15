import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { IAMAuditConfigAuditLogConfig } from "../types/IAMAuditConfigAuditLogConfig";

export interface IAMAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  Project?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_project\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  Service?: string;
}
export class IAMAuditConfig extends Resource {
  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_project\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public Service?: string;

  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public AuditLogConfigs?: Array<IAMAuditConfigAuditLogConfig>;

  // (Computed) The etag of the project's IAM policy.
  public Etag?: string;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "AuditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project id of the target project. This is not\ninferred from the provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_project\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
      ),
    ];
  }
}
