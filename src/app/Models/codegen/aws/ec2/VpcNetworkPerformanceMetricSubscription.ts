import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcNetworkPerformanceMetricSubscriptionArgs {
  // The statistic used for the enabled subscription. Valid values: `p50`. Default: `p50`.
  statistic?: string;

  // The target Region or Availability Zone that the metric subscription is enabled for. For example, `eu-west-1`.
  destination?: string;

  // The metric used for the enabled subscription. Valid values: `aggregate-latency`. Default: `aggregate-latency`.
  metric?: string;

  // The source Region or Availability Zone that the metric subscription is enabled for. For example, `us-east-1`.
  source?: string;
}
export class VpcNetworkPerformanceMetricSubscription extends DS_Resource {
  // The target Region or Availability Zone that the metric subscription is enabled for. For example, `eu-west-1`.
  public destination?: string;

  // The metric used for the enabled subscription. Valid values: `aggregate-latency`. Default: `aggregate-latency`.
  public metric?: string;

  // The data aggregation time for the subscription.
  public period?: string;

  // The source Region or Availability Zone that the metric subscription is enabled for. For example, `us-east-1`.
  public source?: string;

  // The statistic used for the enabled subscription. Valid values: `p50`. Default: `p50`.
  public statistic?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "statistic",
        "The statistic used for the enabled subscription. Valid values: `p50`. Default: `p50`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destination",
        "The target Region or Availability Zone that the metric subscription is enabled for. For example, `eu-west-1`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metric",
        "The metric used for the enabled subscription. Valid values: `aggregate-latency`. Default: `aggregate-latency`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "source",
        "The source Region or Availability Zone that the metric subscription is enabled for. For example, `us-east-1`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
