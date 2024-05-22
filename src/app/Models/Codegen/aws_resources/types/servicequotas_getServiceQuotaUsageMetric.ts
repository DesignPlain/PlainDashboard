import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  servicequotas_getServiceQuotaUsageMetricMetricDimension,
  servicequotas_getServiceQuotaUsageMetricMetricDimension_GetTypes,
} from "./servicequotas_getServiceQuotaUsageMetricMetricDimension";

export interface servicequotas_getServiceQuotaUsageMetric {
  // The metric dimensions.
  metricDimensions?: Array<servicequotas_getServiceQuotaUsageMetricMetricDimension>;

  // The name of the metric.
  metricName?: string;

  // The namespace of the metric.
  metricNamespace?: string;

  // The metric statistic that AWS recommend you use when determining quota usage.
  metricStatisticRecommendation?: string;
}

export function servicequotas_getServiceQuotaUsageMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metricDimensions",
      "The metric dimensions.",
      servicequotas_getServiceQuotaUsageMetricMetricDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The name of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricNamespace",
      "The namespace of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricStatisticRecommendation",
      "The metric statistic that AWS recommend you use when determining quota usage.",
      [],
      true,
      false,
    ),
  ];
}
