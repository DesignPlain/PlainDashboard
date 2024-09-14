import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis {
  // The monitoring schedule for snapshot analysis. For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.
  disabled?: boolean;

  /*
Configuration of the snapshot analysis based monitoring pipeline running interval. The value is rolled up to full day.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

> --Warning:-- `monitoring_interval` is deprecated and will be removed in a future release.
*/
  monitoringInterval?: string;

  /*
Configuration of the snapshot analysis based monitoring pipeline running interval. The value indicates number of days. The default value is 1.
If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.
*/
  monitoringIntervalDays?: number;

  // Customized export features time window for snapshot analysis. Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.
  stalenessDays?: number;
}

export function vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "stalenessDays",
      "Customized export features time window for snapshot analysis. Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "The monitoring schedule for snapshot analysis. For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "monitoringInterval",
      "Configuration of the snapshot analysis based monitoring pipeline running interval. The value is rolled up to full day.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".\n\n> **Warning:** `monitoring_interval` is deprecated and will be removed in a future release.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "monitoringIntervalDays",
      "Configuration of the snapshot analysis based monitoring pipeline running interval. The value indicates number of days. The default value is 1.\nIf both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.",
      () => [],
      false,
      false,
    ),
  ];
}
