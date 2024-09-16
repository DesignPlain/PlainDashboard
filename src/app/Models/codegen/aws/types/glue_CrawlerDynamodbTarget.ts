import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CrawlerDynamodbTarget {
  // The name of the DynamoDB table to crawl.
  path?: string;

  // Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.  defaults to `true`.
  scanAll?: boolean;

  // The percentage of the configured read capacity units to use by the AWS Glue crawler. The valid values are null or a value between 0.1 to 1.5.
  scanRate?: number;
}

export function glue_CrawlerDynamodbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'scanAll',
      'Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.  defaults to `true`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'scanRate',
      'The percentage of the configured read capacity units to use by the AWS Glue crawler. The valid values are null or a value between 0.1 to 1.5.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      'The name of the DynamoDB table to crawl.',
      () => [],
      true,
      false,
    ),
  ];
}
