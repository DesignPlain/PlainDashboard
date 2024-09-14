import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudwatch_MetricStreamExcludeFilter {
  // An array that defines the metrics you want to exclude for this metric namespace
  metricNames?: Array<string>;

  // Name of the metric namespace in the filter.
  namespace?: string;
}

export function cloudwatch_MetricStreamExcludeFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metricNames",
      "An array that defines the metrics you want to exclude for this metric namespace",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Name of the metric namespace in the filter.",
      () => [],
      true,
      false,
    ),
  ];
}
