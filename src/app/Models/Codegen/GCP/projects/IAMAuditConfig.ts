import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_IAMAuditConfigAuditLogConfig,
  Projects_IAMAuditConfigAuditLogConfig_GetTypes,
} from "../types/Projects_IAMAuditConfigAuditLogConfig";

export interface IAMAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  AuditLogConfigs?: Array<Projects_IAMAuditConfigAuditLogConfig>;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  Project?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_project\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  Service?: string;
}
export class IAMAuditConfig extends Resource {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public AuditLogConfigs?: Array<Projects_IAMAuditConfigAuditLogConfig>;

  // (Computed) The etag of the project's IAM policy.
  public Etag?: string;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  public Project?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_project\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_project\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "AuditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
        Projects_IAMAuditConfigAuditLogConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project id of the target project. This is not\ninferred from the provider.",
        [],
        true,
        true,
      ),
    ];
  }
}
