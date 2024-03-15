export interface getClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  // Whether or not the advanced datapath metrics are enabled.
  EnableMetrics?: boolean;

  // Whether or not Relay is enabled.
  EnableRelay?: boolean;

  // Mode used to make Relay available.
  RelayMode?: string;
}
