import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
  composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes,
} from "./composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig";

export interface composer_EnvironmentConfigRecoveryConfig {
  // The configuration settings for scheduled snapshots.
  scheduledSnapshotsConfig?: composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
}

export function composer_EnvironmentConfigRecoveryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "scheduledSnapshotsConfig",
      "The configuration settings for scheduled snapshots.",
      composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
