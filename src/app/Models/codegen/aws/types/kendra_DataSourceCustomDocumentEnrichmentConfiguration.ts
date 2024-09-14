import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration_GetTypes,
} from "./kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration_GetTypes,
} from "./kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration_GetTypes,
} from "./kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration";

export interface kendra_DataSourceCustomDocumentEnrichmentConfiguration {
  // The Amazon Resource Name (ARN) of a role with permission to run `pre_extraction_hook_configuration` and `post_extraction_hook_configuration` for altering document metadata and content during the document ingestion process. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
  roleArn?: string;

  // Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra. Minimum number of `0` items. Maximum number of `100` items. Detailed below.
  inlineConfigurations?: Array<kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration>;

  // A block that specifies the configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation). Detailed below.
  postExtractionHookConfiguration?: kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;

  // Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation). Detailed below.
  preExtractionHookConfiguration?: kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}

export function kendra_DataSourceCustomDocumentEnrichmentConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of a role with permission to run `pre_extraction_hook_configuration` and `post_extraction_hook_configuration` for altering document metadata and content during the document ingestion process. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inlineConfigurations",
      "Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra. Minimum number of `0` items. Maximum number of `100` items. Detailed below.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postExtractionHookConfiguration",
      "A block that specifies the configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation). Detailed below.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "preExtractionHookConfiguration",
      "Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation). Detailed below.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
