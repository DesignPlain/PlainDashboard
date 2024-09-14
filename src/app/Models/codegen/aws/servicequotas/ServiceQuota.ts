import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  servicequotas_ServiceQuotaUsageMetric,
  servicequotas_ServiceQuotaUsageMetric_GetTypes,
} from "../types/servicequotas_ServiceQuotaUsageMetric";

export interface ServiceQuotaArgs {
  // Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
  quotaCode?: string;

  // Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
  serviceCode?: string;

  // Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
  value?: number;
}
export class ServiceQuota extends DS_Resource {
  // Amazon Resource Name (ARN) of the service quota.
  public arn?: string;

  // Name of the quota.
  public quotaName?: string;

  //
  public requestStatus?: string;

  // Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
  public serviceCode?: string;

  // Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
  public value?: number;

  // Whether the service quota can be increased.
  public adjustable?: boolean;

  // Default value of the service quota.
  public defaultValue?: number;

  // Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
  public quotaCode?: string;

  //
  public requestId?: string;

  // Name of the service.
  public serviceName?: string;

  // Information about the measurement.
  public usageMetrics?: Array<servicequotas_ServiceQuotaUsageMetric>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "quotaCode",
        "Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceCode",
        "Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "value",
        "Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
