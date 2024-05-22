import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification";
import {
  autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification,
  autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification";

export interface autoscaling_PolicyTargetTrackingConfiguration {
  // Customized metric. Conflicts with `predefined_metric_specification`.
  customizedMetricSpecification?: autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification;

  // Whether scale in by the target tracking policy is disabled.
  disableScaleIn?: boolean;

  // Predefined metric. Conflicts with `customized_metric_specification`.
  predefinedMetricSpecification?: autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification;

  // Target value for the metric.
  targetValue?: number;
}

export function autoscaling_PolicyTargetTrackingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetValue",
      "Target value for the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customizedMetricSpecification",
      "Customized metric. Conflicts with `predefined_metric_specification`.",
      autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableScaleIn",
      "Whether scale in by the target tracking policy is disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedMetricSpecification",
      "Predefined metric. Conflicts with `customized_metric_specification`.",
      autoscaling_PolicyTargetTrackingConfigurationPredefinedMetricSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
