export interface AiFeatureOnlineStoreFeatureviewBigQuerySource {
  // The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.
  Uri?: string;

  // Columns to construct entityId / row keys. Start by supporting 1 only.
  EntityIdColumns?: Array<string>;
}
