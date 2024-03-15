import { AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis } from "./AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis";
import { AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig } from "./AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig";
import { AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis } from "./AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis";
import { AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig } from "./AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig";

export interface AiFeatureStoreEntityTypeMonitoringConfig {
  /*
The config for ImportFeatures Analysis Based Feature Monitoring.
Structure is documented below.
*/
  ImportFeaturesAnalysis?: AiFeatureStoreEntityTypeMonitoringConfigImportFeaturesAnalysis;

  /*
Threshold for numerical features of anomaly detection. This is shared by all objectives of Featurestore Monitoring for numerical features (i.e. Features with type (Feature.ValueType) DOUBLE or INT64).
Structure is documented below.
*/
  NumericalThresholdConfig?: AiFeatureStoreEntityTypeMonitoringConfigNumericalThresholdConfig;

  /*
The config for Snapshot Analysis Based Feature Monitoring.
Structure is documented below.
*/
  SnapshotAnalysis?: AiFeatureStoreEntityTypeMonitoringConfigSnapshotAnalysis;

  /*
Threshold for categorical features of anomaly detection. This is shared by all types of Featurestore Monitoring for categorical features (i.e. Features with type (Feature.ValueType) BOOL or STRING).
Structure is documented below.
*/
  CategoricalThresholdConfig?: AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig;
}
