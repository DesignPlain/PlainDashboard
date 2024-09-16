import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition_GetTypes,
} from './kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition';

export interface kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  // A block that specifies the condition used for when a Lambda function should be invoked. For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time. See invocation_condition.
  invocationCondition?: kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;

  // The Amazon Resource Name (ARN) of a Lambda Function that can manipulate your document metadata fields or attributes and content.
  lambdaArn?: string;

  // Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda).
  s3Bucket?: string;
}

export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'invocationCondition',
      'A block that specifies the condition used for when a Lambda function should be invoked. For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time. See invocation_condition.',
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lambdaArn',
      'The Amazon Resource Name (ARN) of a Lambda Function that can manipulate your document metadata fields or attributes and content.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3Bucket',
      'Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda).',
      () => [],
      true,
      false,
    ),
  ];
}
