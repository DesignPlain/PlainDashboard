import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersAmazonElasticsearch {
  // The OpenSearch domain.
  domain?: string;
}

export function quicksight_DataSourceParametersAmazonElasticsearch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domain',
      'The OpenSearch domain.',
      () => [],
      true,
      false,
    ),
  ];
}
