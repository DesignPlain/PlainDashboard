import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig,
  vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig_GetTypes,
} from "./vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig";
import {
  vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis,
  vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis_GetTypes,
} from "./vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis";
import {
  vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig,
  vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig_GetTypes,
} from "./vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig";
import {
  vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis,
  vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis_GetTypes,
} from "./vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis";

export interface vertex_AiFeatureStoreEntityTypeMonitoringConfig {
  /*
Threshold for categorical features of anomaly detection. This is shared by all types of Featurestore Monitoring for categorical features (i.e. Features with type (Feature.ValueType) BOOL or STRING).
Structure is documented below.
*/
  categoricalThresholdConfig?: vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig;

  /*
The config for ImportFeatures Analysis Based Feature Monitoring.
Structure is documented below.
*/
  importFeaturesAnalysis?: vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis;

  /*
Threshold for numerical features of anomaly detection. This is shared by all objectives of Featurestore Monitoring for numerical features (i.e. Features with type (Feature.ValueType) DOUBLE or INT64).
Structure is documented below.
*/
  numericalThresholdConfig?: vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig;

  /*
The config for Snapshot Analysis Based Feature Monitoring.
Structure is documented below.
*/
  snapshotAnalysis?: vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis;
}

export function vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "importFeaturesAnalysis",
      "The config for ImportFeatures Analysis Based Feature Monitoring.\nStructure is documented below.",
      vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "numericalThresholdConfig",
      "Threshold for numerical features of anomaly detection. This is shared by all objectives of Featurestore Monitoring for numerical features (i.e. Features with type (Feature.ValueType) DOUBLE or INT64).\nStructure is documented below.",
      vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snapshotAnalysis",
      "The config for Snapshot Analysis Based Feature Monitoring.\nStructure is documented below.",
      vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "categoricalThresholdConfig",
      "Threshold for categorical features of anomaly detection. This is shared by all types of Featurestore Monitoring for categorical features (i.e. Features with type (Feature.ValueType) BOOL or STRING).\nStructure is documented below.",
      vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
