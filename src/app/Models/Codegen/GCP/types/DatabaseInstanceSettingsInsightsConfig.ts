export interface DatabaseInstanceSettingsInsightsConfig {
  // Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. Higher query lengths are more useful for analytical queries, but they also require more memory. Changing the query length requires you to restart the instance. You can still add tags to queries that exceed the length limit.
  QueryStringLength?: number;

  // True if Query Insights will record application tags from query when enabled.
  RecordApplicationTags?: boolean;

  // True if Query Insights will record client address when enabled.
  RecordClientAddress?: boolean;

  // True if Query Insights feature is enabled.
  QueryInsightsEnabled?: boolean;

  /*
Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.

The optional `settings.password_validation_policy` subblock for instances declares [Password Validation Policy](https://cloud.google.com/sql/docs/postgres/built-in-authentication) configuration. It contains:
*/
  QueryPlansPerMinute?: number;
}
