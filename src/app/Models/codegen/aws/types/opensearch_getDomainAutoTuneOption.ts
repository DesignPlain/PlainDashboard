import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opensearch_getDomainAutoTuneOptionMaintenanceSchedule,
  opensearch_getDomainAutoTuneOptionMaintenanceSchedule_GetTypes,
} from "./opensearch_getDomainAutoTuneOptionMaintenanceSchedule";

export interface opensearch_getDomainAutoTuneOption {
  // A list of the nested configurations for the Auto-Tune maintenance windows of the domain.
  maintenanceSchedules?: Array<opensearch_getDomainAutoTuneOptionMaintenanceSchedule>;

  // Whether the domain is set to roll back to default Auto-Tune settings when disabling Auto-Tune.
  rollbackOnDisable?: string;

  // Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window.
  useOffPeakWindow?: boolean;

  // Auto-Tune desired state for the domain.
  desiredState?: string;
}

export function opensearch_getDomainAutoTuneOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "maintenanceSchedules",
      "A list of the nested configurations for the Auto-Tune maintenance windows of the domain.",
      () => opensearch_getDomainAutoTuneOptionMaintenanceSchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rollbackOnDisable",
      "Whether the domain is set to roll back to default Auto-Tune settings when disabling Auto-Tune.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useOffPeakWindow",
      "Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "desiredState",
      "Auto-Tune desired state for the domain.",
      () => [],
      true,
      false,
    ),
  ];
}
