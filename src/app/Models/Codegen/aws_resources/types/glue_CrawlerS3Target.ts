import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CrawlerS3Target {
  // The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a `NETWORK` Connection type.
  connectionName?: string;

  /*
A valid Amazon SQS ARN.

> --Note:-- `deletion_behavior` of catalog target doesn't support `DEPRECATE_IN_DATABASE`.

> --Note:-- `configuration` for catalog target crawlers will have `{ ... "Grouping": { "TableGroupingPolicy": "CombineCompatibleSchemas"} }` by default.
*/
  dlqEventQueueArn?: string;

  // A valid Amazon SQS ARN.
  eventQueueArn?: string;

  // A list of glob patterns used to exclude from the crawl.
  exclusions?: Array<string>;

  // The name of the DynamoDB table to crawl.
  path?: string;

  // Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
  sampleSize?: number;
}

export function glue_CrawlerS3Target_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exclusions",
      "A list of glob patterns used to exclude from the crawl.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The name of the DynamoDB table to crawl.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sampleSize",
      "Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.",
      [],
      false,
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
  ];
}
