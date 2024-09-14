import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  organizations_IamAuditConfigAuditLogConfig,
  organizations_IamAuditConfigAuditLogConfig_GetTypes,
} from "../types/organizations_IamAuditConfigAuditLogConfig";

export interface IamAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  auditLogConfigs?: Array<organizations_IamAuditConfigAuditLogConfig>;

  // The numeric ID of the organization in which you want to manage the audit logging config.
  orgId?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  service?: string;
}
export class IamAuditConfig extends DS_Resource {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public auditLogConfigs?: Array<organizations_IamAuditConfigAuditLogConfig>;

  // The etag of iam policy
  public etag?: string;

  // The numeric ID of the organization in which you want to manage the audit logging config.
  public orgId?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_organization\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "auditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
        () => organizations_IamAuditConfigAuditLogConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The numeric ID of the organization in which you want to manage the audit logging config.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_organization\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
