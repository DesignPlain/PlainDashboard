import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Pubsub_SubscriptionBigqueryConfig {
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

  /*
When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that
are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.
*/
  DropUnknownFields?: boolean;

  // The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}
  Table?: string;
}

export function Pubsub_SubscriptionBigqueryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "WriteMetadata",
      "When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.\nThe subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DropUnknownFields",
      "When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that\nare not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync\nand any messages with extra fields are not written and remain in the subscription's backlog.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Table",
      "The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "UseTableSchema",
      "When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages\nmust be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "UseTopicSchema",
      "When true, use the topic's schema as the columns to write to in BigQuery, if it exists.\nOnly one of use_topic_schema and use_table_schema can be set.",
      [],
      false,
      false,
    ),
  ];
}
