export interface InstanceQueryInsightsConfig {
  // Record application tags for an instance. This flag is turned "on" by default.
  RecordApplicationTags?: boolean;

  // Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
  RecordClientAddress?: boolean;

  // Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
  QueryPlansPerMinute?: number;

  // Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
  QueryStringLength?: number;
}
