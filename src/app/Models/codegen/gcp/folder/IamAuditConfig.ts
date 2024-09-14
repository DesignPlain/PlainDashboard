import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  folder_IamAuditConfigAuditLogConfig,
  folder_IamAuditConfigAuditLogConfig_GetTypes,
} from "../types/folder_IamAuditConfigAuditLogConfig";

export interface IamAuditConfigArgs {
  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  auditLogConfigs?: Array<folder_IamAuditConfigAuditLogConfig>;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  folder?: string;

  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_folder\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  service?: string;
}
export class IamAuditConfig extends DS_Resource {
  // Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\_folder\_iam\_audit\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.
  public service?: string;

  // The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.
  public auditLogConfigs?: Array<folder_IamAuditConfigAuditLogConfig>;

  // (Computed) The etag of the folder's IAM policy.
  public etag?: string;

  // The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.
  public folder?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "service",
        "Service which will be enabled for audit logging.  The special value `allServices` covers all services.  Note that if there are google\\_folder\\_iam\\_audit\\_config resources covering both `allServices` and a specific service then the union of the two AuditConfigs is used for that service: the `log_types` specified in each `audit_log_config` are enabled, and the `exempted_members` in each `audit_log_config` are exempted.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "auditLogConfigs",
        "The configuration for logging of each type of permission.  This can be specified multiple times.  Structure is documented below.",
        () => folder_IamAuditConfigAuditLogConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The resource name of the folder the policy is attached to. Its format is folders/{folder_id}.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
