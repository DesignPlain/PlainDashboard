import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  BatchNodeCount?: number;

  // Percentage of the blue pool nodes to drain in a batch.
  BatchPercentage?: number;

  // Soak time after each batch gets drained.
  BatchSoakDuration?: string;
}

export function Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "BatchNodeCount",
      "Number of blue nodes to drain in a batch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BatchPercentage",
      "Percentage of the blue pool nodes to drain in a batch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BatchSoakDuration",
      "Soak time after each batch gets drained.",
      [],
      false,
      false,
    ),
  ];
}
