export interface ClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  // Whether or not to enable advanced datapath metrics.
  EnableMetrics?: boolean;

  // Whether or not Relay is enabled.
  EnableRelay?: boolean;

  // Mode used to make Relay available.
  RelayMode?: string;
}
