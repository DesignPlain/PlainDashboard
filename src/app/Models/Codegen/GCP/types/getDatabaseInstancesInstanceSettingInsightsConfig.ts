export interface getDatabaseInstancesInstanceSettingInsightsConfig {
  // True if Query Insights feature is enabled.
  QueryInsightsEnabled?: boolean;

  // Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.
  QueryPlansPerMinute?: number;

  // Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
  QueryStringLength?: number;

  // True if Query Insights will record application tags from query when enabled.
  RecordApplicationTags?: boolean;

  // True if Query Insights will record client address when enabled.
  RecordClientAddress?: boolean;
}
