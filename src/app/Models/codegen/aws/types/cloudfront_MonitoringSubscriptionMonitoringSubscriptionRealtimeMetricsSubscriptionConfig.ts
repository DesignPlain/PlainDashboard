import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  // A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution. Valid values are `Enabled` and `Disabled`. See below.
  realtimeMetricsSubscriptionStatus?: string;
}

export function cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "realtimeMetricsSubscriptionStatus",
      "A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution. Valid values are `Enabled` and `Disabled`. See below.",
      () => [],
      true,
      false,
    ),
  ];
}
