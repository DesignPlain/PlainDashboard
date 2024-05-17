import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  BatchNodeCount?: number;

  // Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  BatchPercentage?: number;

  /*
Soak time after each batch gets drained.

																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  BatchSoakDuration?: string;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefaultUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "BatchNodeCount",
      "Number of blue nodes to drain in a batch.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BatchPercentage",
      "Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BatchSoakDuration",
      "Soak time after each batch gets drained.\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
  ];
}
