import { AiFeatureGroupBigQueryBigQuerySource } from "./AiFeatureGroupBigQueryBigQuerySource";

export interface AiFeatureGroupBigQuery {
  /*
The BigQuery source URI that points to either a BigQuery Table or View.
Structure is documented below.
*/
  BigQuerySource?: AiFeatureGroupBigQueryBigQuerySource;

  // Columns to construct entityId / row keys. Currently only supports 1 entity_id_column. If not provided defaults to entityId.
  EntityIdColumns?: Array<string>;
}
