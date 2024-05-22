import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainAutoTuneOptionsMaintenanceSchedule,
  opensearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes,
} from "./opensearch_DomainAutoTuneOptionsMaintenanceSchedule";

export interface opensearch_DomainAutoTuneOptions {
  // Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.
  desiredState?: string;

  // Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.
  maintenanceSchedules?: Array<opensearch_DomainAutoTuneOptionsMaintenanceSchedule>;

  // Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`.
  rollbackOnDisable?: string;
}

export function opensearch_DomainAutoTuneOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "desiredState",
      "Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceSchedules",
      "Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.",
      opensearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rollbackOnDisable",
      "Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`.",
      [],
      false,
      false,
    ),
  ];
}
