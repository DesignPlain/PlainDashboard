import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface evidently_LaunchMetricMonitorMetricDefinition {
  // Specifies The EventBridge event pattern that defines how the metric is recorded.
  eventPattern?: string;

  // Specifies the name for the metric.
  name?: string;

  // Specifies a label for the units that the metric is measuring.
  unitLabel?: string;

  // Specifies the value that is tracked to produce the metric.
  valueKey?: string;

  // Specifies the entity, such as a user or session, that does an action that causes a metric value to be recorded. An example is `userDetails.userID`.
  entityIdKey?: string;
}

export function evidently_LaunchMetricMonitorMetricDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventPattern",
      "Specifies The EventBridge event pattern that defines how the metric is recorded.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Specifies the name for the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unitLabel",
      "Specifies a label for the units that the metric is measuring.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueKey",
      "Specifies the value that is tracked to produce the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityIdKey",
      "Specifies the entity, such as a user or session, that does an action that causes a metric value to be recorded. An example is `userDetails.userID`.",
      [],
      true,
      false,
    ),
  ];
}
