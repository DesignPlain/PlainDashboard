import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig,
  cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig_GetTypes,
} from "./cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig";

export interface cloudfront_MonitoringSubscriptionMonitoringSubscription {
  // A subscription configuration for additional CloudWatch metrics. See below.
  realtimeMetricsSubscriptionConfig?: cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}

export function cloudfront_MonitoringSubscriptionMonitoringSubscription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "realtimeMetricsSubscriptionConfig",
      "A subscription configuration for additional CloudWatch metrics. See below.",
      cloudfront_MonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
