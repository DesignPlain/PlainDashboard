import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
  composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes,
} from './composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig';

export interface composer_getEnvironmentConfigRecoveryConfig {
  // The configuration settings for scheduled snapshots.
  scheduledSnapshotsConfigs?: Array<composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig>;
}

export function composer_getEnvironmentConfigRecoveryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'scheduledSnapshotsConfigs',
      'The configuration settings for scheduled snapshots.',
      () =>
        composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
