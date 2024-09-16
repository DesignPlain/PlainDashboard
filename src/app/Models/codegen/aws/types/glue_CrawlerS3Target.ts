import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CrawlerS3Target {
  // The path to the Amazon S3 target.
  path?: string;

  // Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
  sampleSize?: number;

  // The name of a connection which allows crawler to access data in S3 within a VPC.
  connectionName?: string;

  // The ARN of the dead-letter SQS queue.
  dlqEventQueueArn?: string;

  // The ARN of the SQS queue to receive S3 notifications from.
  eventQueueArn?: string;

  // A list of glob patterns used to exclude from the crawl.
  exclusions?: Array<string>;
}

export function glue_CrawlerS3Target_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'The path to the Amazon S3 target.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sampleSize',
      'Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'connectionName',
      'The name of a connection which allows crawler to access data in S3 within a VPC.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dlqEventQueueArn',
      'The ARN of the dead-letter SQS queue.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'eventQueueArn',
      'The ARN of the SQS queue to receive S3 notifications from.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exclusions',
      'A list of glob patterns used to exclude from the crawl.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
