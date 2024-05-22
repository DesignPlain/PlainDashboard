import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_MetricStreamIncludeFilter {
  // An array that defines the metrics you want to include for this metric namespace
  metricNames?: Array<string>;

  // Name of the metric namespace in the filter.
  namespace?: string;
}

export function cloudwatch_MetricStreamIncludeFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metricNames",
      "An array that defines the metrics you want to include for this metric namespace",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Name of the metric namespace in the filter.",
      [],
      true,
      false,
    ),
  ];
}
