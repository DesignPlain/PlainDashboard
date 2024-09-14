import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodeConfigKubeletConfig {
  // Enable CPU CFS quota enforcement for containers that specify CPU limits.
  cpuCfsQuota?: boolean;

  // Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  cpuCfsQuotaPeriod?: string;

  // Control the CPU management policy on the node.
  cpuManagerPolicy?: string;

  // Controls the maximum number of processes allowed to run in a pod.
  podPidsLimit?: number;
}

export function container_getClusterNodeConfigKubeletConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "podPidsLimit",
      "Controls the maximum number of processes allowed to run in a pod.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cpuCfsQuota",
      "Enable CPU CFS quota enforcement for containers that specify CPU limits.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpuCfsQuotaPeriod",
      "Set the CPU CFS quota period value 'cpu.cfs_period_us'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpuManagerPolicy",
      "Control the CPU management policy on the node.",
      () => [],
      true,
      false,
    ),
  ];
}
