import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue_GetTypes,
} from './kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue';

export interface kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition {
  // The identifier of the document attribute used for the condition. For example, `_source_uri` could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Kendra currently does not support `_document_body` as an attribute key used for the condition.
  conditionDocumentAttributeKey?: string;

  // The value used by the operator. For example, you can specify the value 'financial' for strings in the `_source_uri` field that partially match or contain this value. See condition_on_value.
  conditionOnValue?: kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue;

  // The condition operator. For example, you can use `Contains` to partially match a string. Valid Values: `GreaterThan` | `GreaterThanOrEquals` | `LessThan` | `LessThanOrEquals` | `Equals` | `NotEquals` | `Contains` | `NotContains` | `Exists` | `NotExists` | `BeginsWith`.
  operator?: string;
}

export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'conditionOnValue',
      "The value used by the operator. For example, you can specify the value 'financial' for strings in the `_source_uri` field that partially match or contain this value. See condition_on_value.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationConditionConditionOnValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'operator',
      'The condition operator. For example, you can use `Contains` to partially match a string. Valid Values: `GreaterThan` | `GreaterThanOrEquals` | `LessThan` | `LessThanOrEquals` | `Equals` | `NotEquals` | `Contains` | `NotContains` | `Exists` | `NotExists` | `BeginsWith`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'conditionDocumentAttributeKey',
      'The identifier of the document attribute used for the condition. For example, `_source_uri` could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Kendra currently does not support `_document_body` as an attribute key used for the condition.',
      () => [],
      true,
      false,
    ),
  ];
}
