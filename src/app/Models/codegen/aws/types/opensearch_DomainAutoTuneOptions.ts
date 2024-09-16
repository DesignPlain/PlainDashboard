import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_DomainAutoTuneOptionsMaintenanceSchedule,
  opensearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes,
} from './opensearch_DomainAutoTuneOptionsMaintenanceSchedule';

export interface opensearch_DomainAutoTuneOptions {
  // Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.
  desiredState?: string;

  /*
Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.

--NOTE:-- Maintenance windows are deprecated and have been replaced with [off-peak windows](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html). Consequently, `maintenance_schedule` configuration blocks cannot be specified when `use_off_peak_window` is set to `true`.
*/
  maintenanceSchedules?: Array<opensearch_DomainAutoTuneOptionsMaintenanceSchedule>;

  // Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`.
  rollbackOnDisable?: string;

  // Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window. Defaults to `false`.
  useOffPeakWindow?: boolean;
}

export function opensearch_DomainAutoTuneOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'useOffPeakWindow',
      "Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'desiredState',
      'Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'maintenanceSchedules',
      'Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below.\n\n**NOTE:** Maintenance windows are deprecated and have been replaced with [off-peak windows](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html). Consequently, `maintenance_schedule` configuration blocks cannot be specified when `use_off_peak_window` is set to `true`.',
      () => opensearch_DomainAutoTuneOptionsMaintenanceSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rollbackOnDisable',
      'Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`.',
      () => [],
      false,
      false,
    ),
  ];
}
