import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codepipeline_WebhookFilter {
  // The [JSON path](https://github.com/json-path/JsonPath) to filter on.
  jsonPath?: string;

  // The value to match on (e.g., `refs/heads/{Branch}`). See [AWS docs](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_WebhookFilterRule.html) for details.
  matchEquals?: string;
}

export function codepipeline_WebhookFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'jsonPath',
      'The [JSON path](https://github.com/json-path/JsonPath) to filter on.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'matchEquals',
      'The value to match on (e.g., `refs/heads/{Branch}`). See [AWS docs](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_WebhookFilterRule.html) for details.',
      () => [],
      true,
      false,
    ),
  ];
}
