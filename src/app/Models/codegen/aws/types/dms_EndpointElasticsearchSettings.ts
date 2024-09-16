import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dms_EndpointElasticsearchSettings {
  // Endpoint for the OpenSearch cluster.
  endpointUri?: string;

  // Maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. Default is `300`.
  errorRetryDuration?: number;

  // Maximum percentage of records that can fail to be written before a full load operation stops. Default is `10`.
  fullLoadErrorPercentage?: number;

  // ARN of the IAM Role with permissions to write to the OpenSearch cluster.
  serviceAccessRoleArn?: string;

  // Enable to migrate documentation using the documentation type `_doc`. OpenSearch and an Elasticsearch clusters only support the _doc documentation type in versions 7.x and later. The default value is `false`.
  useNewMappingType?: boolean;
}

export function dms_EndpointElasticsearchSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceAccessRoleArn',
      'ARN of the IAM Role with permissions to write to the OpenSearch cluster.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useNewMappingType',
      'Enable to migrate documentation using the documentation type `_doc`. OpenSearch and an Elasticsearch clusters only support the _doc documentation type in versions 7.x and later. The default value is `false`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointUri',
      'Endpoint for the OpenSearch cluster.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'errorRetryDuration',
      'Maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. Default is `300`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'fullLoadErrorPercentage',
      'Maximum percentage of records that can fail to be written before a full load operation stops. Default is `10`.',
      () => [],
      false,
      true,
    ),
  ];
}
