import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
  Composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes,
} from "./Composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig";

export interface Composer_getEnvironmentConfigRecoveryConfig {
  // The configuration settings for scheduled snapshots.
  ScheduledSnapshotsConfigs?: Array<Composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig>;
}

export function Composer_getEnvironmentConfigRecoveryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ScheduledSnapshotsConfigs",
      "The configuration settings for scheduled snapshots.",
      Composer_getEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
