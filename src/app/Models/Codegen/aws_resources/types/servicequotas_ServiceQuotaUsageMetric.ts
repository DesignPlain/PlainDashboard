import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  servicequotas_ServiceQuotaUsageMetricMetricDimension,
  servicequotas_ServiceQuotaUsageMetricMetricDimension_GetTypes,
} from "./servicequotas_ServiceQuotaUsageMetricMetricDimension";

export interface servicequotas_ServiceQuotaUsageMetric {
  // The metric dimensions.
  metricDimensions?: Array<servicequotas_ServiceQuotaUsageMetricMetricDimension>;

  // The name of the metric.
  metricName?: string;

  // The namespace of the metric.
  metricNamespace?: string;

  // The metric statistic that AWS recommend you use when determining quota usage.
  metricStatisticRecommendation?: string;
}

export function servicequotas_ServiceQuotaUsageMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricNamespace",
      "The namespace of the metric.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricStatisticRecommendation",
      "The metric statistic that AWS recommend you use when determining quota usage.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metricDimensions",
      "The metric dimensions.",
      servicequotas_ServiceQuotaUsageMetricMetricDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The name of the metric.",
      [],
      false,
      false,
    ),
  ];
}
