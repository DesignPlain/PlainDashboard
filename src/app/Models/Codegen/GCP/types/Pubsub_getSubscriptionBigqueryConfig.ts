import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pubsub_getSubscriptionBigqueryConfig {
  /*
When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.
The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
*/
  writeMetadata?: boolean;

  /*
When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that
are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.
*/
  dropUnknownFields?: boolean;

  // The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}
  table?: string;

  /*
When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.
*/
  useTableSchema?: boolean;

  /*
When true, use the topic's schema as the columns to write to in BigQuery, if it exists.
Only one of use_topic_schema and use_table_schema can be set.
*/
  useTopicSchema?: boolean;
}

export function pubsub_getSubscriptionBigqueryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "writeMetadata",
      "When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.\nThe subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dropUnknownFields",
      "When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that\nare not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync\nand any messages with extra fields are not written and remain in the subscription's backlog.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "table",
      "The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useTableSchema",
      "When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages\nmust be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useTopicSchema",
      "When true, use the topic's schema as the columns to write to in BigQuery, if it exists.\nOnly one of use_topic_schema and use_table_schema can be set.",
      [],
      true,
      false,
    ),
  ];
}
