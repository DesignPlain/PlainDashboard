import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CrawlerCatalogTarget {
  // The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a `NETWORK` Connection type.
  connectionName?: string;

  // The name of the Glue database to be synchronized.
  databaseName?: string;

  /*
A valid Amazon SQS ARN.

> --Note:-- `deletion_behavior` of catalog target doesn't support `DEPRECATE_IN_DATABASE`.

> --Note:-- `configuration` for catalog target crawlers will have `{ ... "Grouping": { "TableGroupingPolicy": "CombineCompatibleSchemas"} }` by default.
*/
  dlqEventQueueArn?: string;

  // A valid Amazon SQS ARN.
  eventQueueArn?: string;

  // A list of catalog tables to be synchronized.
  tables?: Array<string>;
}

export function glue_CrawlerCatalogTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of the Glue database to be synchronized.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dlqEventQueueArn",
      'A valid Amazon SQS ARN.\n\n> **Note:** `deletion_behavior` of catalog target doesn\'t support `DEPRECATE_IN_DATABASE`.\n\n> **Note:** `configuration` for catalog target crawlers will have `{ ... "Grouping": { "TableGroupingPolicy": "CombineCompatibleSchemas"} }` by default.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventQueueArn",
      "A valid Amazon SQS ARN.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tables",
      "A list of catalog tables to be synchronized.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a `NETWORK` Connection type.",
      [],
      false,
      false,
    ),
  ];
}
