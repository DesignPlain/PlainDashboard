import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule,
  elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes,
} from "./elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule";

export interface elasticsearch_DomainAutoTuneOptions {
  // Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`.
  rollbackOnDisable?: string;

  // The Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.
  desiredState?: string;

  // Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.
  maintenanceSchedules?: Array<elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule>;
}

export function elasticsearch_DomainAutoTuneOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "desiredState",
      "The Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceSchedules",
      "Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.",
      elasticsearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes(),
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
