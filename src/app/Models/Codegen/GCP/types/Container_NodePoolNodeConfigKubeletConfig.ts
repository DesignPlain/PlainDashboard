import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNodeConfigKubeletConfig {
  // Enable CPU CFS quota enforcement for containers that specify CPU limits.
  CpuCfsQuota?: boolean;

  // Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  CpuCfsQuotaPeriod?: string;

  // Control the CPU management policy on the node.
  CpuManagerPolicy?: string;

  // Controls the maximum number of processes allowed to run in a pod.
  PodPidsLimit?: number;
}

export function Container_NodePoolNodeConfigKubeletConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "CpuCfsQuota",
      "Enable CPU CFS quota enforcement for containers that specify CPU limits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CpuCfsQuotaPeriod",
      "Set the CPU CFS quota period value 'cpu.cfs_period_us'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CpuManagerPolicy",
      "Control the CPU management policy on the node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PodPidsLimit",
      "Controls the maximum number of processes allowed to run in a pod.",
      [],
      false,
      false,
    ),
  ];
}
