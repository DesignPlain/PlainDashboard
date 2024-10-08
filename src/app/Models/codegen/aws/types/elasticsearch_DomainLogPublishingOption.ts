import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticsearch_DomainLogPublishingOption {
  // Whether given log publishing option is enabled or not.
  enabled?: boolean;

  // Type of Elasticsearch log. Valid values: `INDEX_SLOW_LOGS`, `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `AUDIT_LOGS`.
  logType?: string;

  // ARN of the Cloudwatch log group to which log needs to be published.
  cloudwatchLogGroupArn?: string;
}

export function elasticsearch_DomainLogPublishingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether given log publishing option is enabled or not.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logType',
      'Type of Elasticsearch log. Valid values: `INDEX_SLOW_LOGS`, `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `AUDIT_LOGS`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudwatchLogGroupArn',
      'ARN of the Cloudwatch log group to which log needs to be published.',
      () => [],
      true,
      false,
    ),
  ];
}
