import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_DataSourceConfiguration,
  kendra_DataSourceConfiguration_GetTypes,
} from "../types/kendra_DataSourceConfiguration";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfiguration,
  kendra_DataSourceCustomDocumentEnrichmentConfiguration_GetTypes,
} from "../types/kendra_DataSourceCustomDocumentEnrichmentConfiguration";

export interface DataSourceArgs {
  // A block with the configuration information to connect to your Data Source repository. You can't specify the `configuration` block when the `type` parameter is set to `CUSTOM`. Detailed below.
  configuration?: kendra_DataSourceConfiguration;

  // A block with the configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html). Detailed below.
  customDocumentEnrichmentConfiguration?: kendra_DataSourceCustomDocumentEnrichmentConfiguration;

  // The identifier of the index for your Amazon Kendra data source.
  indexId?: string;

  // The Amazon Resource Name (ARN) of a role with permission to access the data source connector. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html). You can't specify the `role_arn` parameter when the `type` parameter is set to `CUSTOM`. The `role_arn` parameter is required for all other data sources.
  roleArn?: string;

  // A description for the Data Source connector.
  description?: string;

  // The code for a language. This allows you to support a language for all documents when creating the Data Source connector. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
  languageCode?: string;

  // A name for your data source connector.
  name?: string;

  // Sets the frequency for Amazon Kendra to check the documents in your Data Source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the `StartDataSourceSyncJob` API to update the index.
  schedule?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The type of data source repository. For an updated list of values, refer to [Valid Values for Type](https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html#Kendra-CreateDataSource-request-Type).

The following arguments are optional:
*/
  type?: string;
}
export class DataSource extends DS_Resource {
  // The Unix timestamp of when the Data Source was created.
  public createdAt?: string;

  // When the Status field value is `FAILED`, the ErrorMessage field contains a description of the error that caused the Data Source to fail.
  public errorMessage?: string;

  // The identifier of the index for your Amazon Kendra data source.
  public indexId?: string;

  // The code for a language. This allows you to support a language for all documents when creating the Data Source connector. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
  public languageCode?: string;

  // A name for your data source connector.
  public name?: string;

  // The Amazon Resource Name (ARN) of a role with permission to access the data source connector. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html). You can't specify the `role_arn` parameter when the `type` parameter is set to `CUSTOM`. The `role_arn` parameter is required for all other data sources.
  public roleArn?: string;

  /*
The type of data source repository. For an updated list of values, refer to [Valid Values for Type](https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html#Kendra-CreateDataSource-request-Type).

The following arguments are optional:
*/
  public type?: string;

  // ARN of the Data Source.
  public arn?: string;

  // Sets the frequency for Amazon Kendra to check the documents in your Data Source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the `StartDataSourceSyncJob` API to update the index.
  public schedule?: string;

  // The current status of the Data Source. When the status is `ACTIVE` the Data Source is ready to use. When the status is `FAILED`, the `error_message` field contains the reason that the Data Source failed.
  public status?: string;

  // The unique identifiers of the Data Source.
  public dataSourceId?: string;

  // The Unix timestamp of when the Data Source was last updated.
  public updatedAt?: string;

  // A description for the Data Source connector.
  public description?: string;

  // A block with the configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html). Detailed below.
  public customDocumentEnrichmentConfiguration?: kendra_DataSourceCustomDocumentEnrichmentConfiguration;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A block with the configuration information to connect to your Data Source repository. You can't specify the `configuration` block when the `type` parameter is set to `CUSTOM`. Detailed below.
  public configuration?: kendra_DataSourceConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the Data Source connector.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The code for a language. This allows you to support a language for all documents when creating the Data Source connector. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for your data source connector.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for your Amazon Kendra data source.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "customDocumentEnrichmentConfiguration",
        "A block with the configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html). Detailed below.",
        () => kendra_DataSourceCustomDocumentEnrichmentConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of a role with permission to access the data source connector. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html). You can't specify the `role_arn` parameter when the `type` parameter is set to `CUSTOM`. The `role_arn` parameter is required for all other data sources.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "Sets the frequency for Amazon Kendra to check the documents in your Data Source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the `StartDataSourceSyncJob` API to update the index.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of data source repository. For an updated list of values, refer to [Valid Values for Type](https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html#Kendra-CreateDataSource-request-Type).\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "A block with the configuration information to connect to your Data Source repository. You can't specify the `configuration` block when the `type` parameter is set to `CUSTOM`. Detailed below.",
        () => kendra_DataSourceConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
