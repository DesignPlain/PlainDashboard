import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
  Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes,
} from "./Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig";

export interface Composer_EnvironmentConfigRecoveryConfig {
  // The configuration settings for scheduled snapshots.
  ScheduledSnapshotsConfig?: Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
}

export function Composer_EnvironmentConfigRecoveryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ScheduledSnapshotsConfig",
      "The configuration settings for scheduled snapshots.",
      Composer_EnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
