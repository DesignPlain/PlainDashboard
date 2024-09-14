import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appsync_GraphQLApiEnhancedMetricsConfig {
  // How data source metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_DATA_SOURCE_METRICS`, `PER_DATA_SOURCE_METRICS`
  dataSourceLevelMetricsBehavior?: string;

  // How operation metrics will be emitted to CloudWatch. Valid values: `ENABLED`, `DISABLED`
  operationLevelMetricsConfig?: string;

  // How resolver metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_RESOLVER_METRICS`, `PER_RESOLVER_METRICS`
  resolverLevelMetricsBehavior?: string;
}

export function appsync_GraphQLApiEnhancedMetricsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resolverLevelMetricsBehavior",
      "How resolver metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_RESOLVER_METRICS`, `PER_RESOLVER_METRICS`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSourceLevelMetricsBehavior",
      "How data source metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_DATA_SOURCE_METRICS`, `PER_DATA_SOURCE_METRICS`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operationLevelMetricsConfig",
      "How operation metrics will be emitted to CloudWatch. Valid values: `ENABLED`, `DISABLED`",
      () => [],
      true,
      false,
    ),
  ];
}
