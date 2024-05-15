import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Organizations_IamAuditConfigAuditLogConfig,
  Organizations_IamAuditConfigAuditLogConfig_GetTypes,
} from "../types/Organizations_IamAuditConfigAuditLogConfig";

export interface IamAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  AuditLogConfigs?: Array<Organizations_IamAuditConfigAuditLogConfig>;

  // The numeric ID of the organization in which you want to manage the audit logging config.
  OrgId?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  Service?: string;
}
export class IamAuditConfig extends Resource {
  // The numeric ID of the organization in which you want to manage the audit logging config.
  public OrgId?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public Service?: string;

  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public AuditLogConfigs?: Array<Organizations_IamAuditConfigAuditLogConfig>;

  // The etag of iam policy
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "AuditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
        Organizations_IamAuditConfigAuditLogConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization in which you want to manage the audit logging config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_organization\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
        [],
        true,
        false,
      ),
    ];
  }
}
