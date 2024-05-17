import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis,
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis_GetTypes,
} from "./Vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis";
import {
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig,
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig_GetTypes,
} from "./Vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig";
import {
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis,
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis_GetTypes,
} from "./Vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis";
import {
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig,
  Vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig_GetTypes,
} from "./Vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig";

export interface Vertex_AiFeatureStoreEntityTypeMonitoringConfig {
  /*
Threshold for categorical features of anomaly detection. This is shared by all types of Featurestore Monitoring for categorical features (i.e. Features with type (Feature.ValueType) BOOL or STRING).
Structure is documented below.
*/
  CategoricalThresholdConfig?: Vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig;

  /*
The config for ImportFeatures Analysis Based Feature Monitoring.
Structure is documented below.
*/
  ImportFeaturesAnalysis?: Vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis;

  /*
Threshold for numerical features of anomaly detection. This is shared by all objectives of Featurestore Monitoring for numerical features (i.e. Features with type (Feature.ValueType) DOUBLE or INT64).
Structure is documented below.
*/
  NumericalThresholdConfig?: Vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig;

  /*
The config for Snapshot Analysis Based Feature Monitoring.
Structure is documented below.
*/
  SnapshotAnalysis?: Vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis;
}

export function Vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NumericalThresholdConfig",
      "Threshold for numerical features of anomaly detection. This is shared by all objectives of Featurestore Monitoring for numerical features (i.e. Features with type (Feature.ValueType) DOUBLE or INT64).\nStructure is documented below.",
      Vertex_AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SnapshotAnalysis",
      "The config for Snapshot Analysis Based Feature Monitoring.\nStructure is documented below.",
      Vertex_AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CategoricalThresholdConfig",
      "Threshold for categorical features of anomaly detection. This is shared by all types of Featurestore Monitoring for categorical features (i.e. Features with type (Feature.ValueType) BOOL or STRING).\nStructure is documented below.",
      Vertex_AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ImportFeaturesAnalysis",
      "The config for ImportFeatures Analysis Based Feature Monitoring.\nStructure is documented below.",
      Vertex_AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis_GetTypes(),
      false,
      false,
    ),
  ];
}
