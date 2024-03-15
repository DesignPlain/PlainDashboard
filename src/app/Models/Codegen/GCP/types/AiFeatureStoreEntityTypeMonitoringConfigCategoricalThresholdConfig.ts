export interface AiFeatureStoreEntityTypeMonitoringConfigCategoricalThresholdConfig {
  // Specify a threshold value that can trigger the alert. For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.
  Value?: number;
}
