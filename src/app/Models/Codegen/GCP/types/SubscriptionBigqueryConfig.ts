export interface SubscriptionBigqueryConfig {
  /*
When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that
are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.
*/
  DropUnknownFields?: boolean;

  // The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}
  Table?: string;

  /*
When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.
*/
  UseTableSchema?: boolean;

  /*
When true, use the topic's schema as the columns to write to in BigQuery, if it exists.
Only one of use_topic_schema and use_table_schema can be set.
*/
  UseTopicSchema?: boolean;

  /*
When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.
The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
*/
  WriteMetadata?: boolean;
}
