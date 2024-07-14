import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appautoscaling_ScheduledActionScalableTargetAction {
  // Maximum capacity. At least one of `max_capacity` or `min_capacity` must be set.
  maxCapacity?: number;

  // Minimum capacity. At least one of `min_capacity` or `max_capacity` must be set.
  minCapacity?: number;
}

export function appautoscaling_ScheduledActionScalableTargetAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxCapacity",
      "Maximum capacity. At least one of `max_capacity` or `min_capacity` must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minCapacity",
      "Minimum capacity. At least one of `min_capacity` or `max_capacity` must be set.",
      [],
      false,
      false,
    ),
  ];
}
