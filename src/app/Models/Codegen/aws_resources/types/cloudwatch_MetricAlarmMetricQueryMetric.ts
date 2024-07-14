import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_MetricAlarmMetricQueryMetric {
  // The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
  dimensions?: Map<string, string>;

  /*
The name for this metric.
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  metricName?: string;

  /*
The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).
See docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).
*/
  namespace?: string;

  /*
Granularity in seconds of returned data points.
For metrics with regular resolution, valid values are any multiple of `60`.
For high-resolution metrics, valid values are `1`, `5`, `10`, `30`, or any multiple of `60`.
*/
  period?: number;

  /*
The statistic to apply to this metric.
See docs for [supported statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
*/
  stat?: string;

  // The unit for this metric.
  unit?: string;
}

export function cloudwatch_MetricAlarmMetricQueryMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "period",
      "Granularity in seconds of returned data points.\nFor metrics with regular resolution, valid values are any multiple of `60`.\nFor high-resolution metrics, valid values are `1`, `5`, `10`, `30`, or any multiple of `60`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stat",
      "The statistic to apply to this metric.\nSee docs for [supported statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "The unit for this metric.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "dimensions",
      "The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The name for this metric.\nSee docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).\nSee docs for [supported metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html).",
      [],
      false,
      false,
    ),
  ];
}
