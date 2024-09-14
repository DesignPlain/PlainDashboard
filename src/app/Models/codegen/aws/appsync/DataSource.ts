import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appsync_DataSourceRelationalDatabaseConfig,
  appsync_DataSourceRelationalDatabaseConfig_GetTypes,
} from "../types/appsync_DataSourceRelationalDatabaseConfig";
import {
  appsync_DataSourceHttpConfig,
  appsync_DataSourceHttpConfig_GetTypes,
} from "../types/appsync_DataSourceHttpConfig";
import {
  appsync_DataSourceDynamodbConfig,
  appsync_DataSourceDynamodbConfig_GetTypes,
} from "../types/appsync_DataSourceDynamodbConfig";
import {
  appsync_DataSourceElasticsearchConfig,
  appsync_DataSourceElasticsearchConfig_GetTypes,
} from "../types/appsync_DataSourceElasticsearchConfig";
import {
  appsync_DataSourceEventBridgeConfig,
  appsync_DataSourceEventBridgeConfig_GetTypes,
} from "../types/appsync_DataSourceEventBridgeConfig";
import {
  appsync_DataSourceLambdaConfig,
  appsync_DataSourceLambdaConfig_GetTypes,
} from "../types/appsync_DataSourceLambdaConfig";
import {
  appsync_DataSourceOpensearchserviceConfig,
  appsync_DataSourceOpensearchserviceConfig_GetTypes,
} from "../types/appsync_DataSourceOpensearchserviceConfig";

export interface DataSourceArgs {
  // Description of the data source.
  description?: string;

  // DynamoDB settings. See `dynamodb_config` Block for details.
  dynamodbConfig?: appsync_DataSourceDynamodbConfig;

  // Amazon Elasticsearch settings. See `elasticsearch_config` Block for details.
  elasticsearchConfig?: appsync_DataSourceElasticsearchConfig;

  // AWS EventBridge settings. See `event_bridge_config` Block for details.
  eventBridgeConfig?: appsync_DataSourceEventBridgeConfig;

  // AWS Lambda settings. See `lambda_config` Block for details.
  lambdaConfig?: appsync_DataSourceLambdaConfig;

  // User-supplied name for the data source.
  name?: string;

  // Amazon OpenSearch Service settings. See `opensearchservice_config` Block for details.
  opensearchserviceConfig?: appsync_DataSourceOpensearchserviceConfig;

  // API ID for the GraphQL API for the data source.
  apiId?: string;

  // IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.
  serviceRoleArn?: string;

  // Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.
  type?: string;

  // AWS RDS settings. See `relational_database_config` Block for details.
  relationalDatabaseConfig?: appsync_DataSourceRelationalDatabaseConfig;

  // HTTP settings. See `http_config` Block for details.
  httpConfig?: appsync_DataSourceHttpConfig;
}
export class DataSource extends DS_Resource {
  // HTTP settings. See `http_config` Block for details.
  public httpConfig?: appsync_DataSourceHttpConfig;

  // AWS Lambda settings. See `lambda_config` Block for details.
  public lambdaConfig?: appsync_DataSourceLambdaConfig;

  // Amazon OpenSearch Service settings. See `opensearchservice_config` Block for details.
  public opensearchserviceConfig?: appsync_DataSourceOpensearchserviceConfig;

  // AWS RDS settings. See `relational_database_config` Block for details.
  public relationalDatabaseConfig?: appsync_DataSourceRelationalDatabaseConfig;

  // API ID for the GraphQL API for the data source.
  public apiId?: string;

  // ARN
  public arn?: string;

  // Description of the data source.
  public description?: string;

  // AWS EventBridge settings. See `event_bridge_config` Block for details.
  public eventBridgeConfig?: appsync_DataSourceEventBridgeConfig;

  // Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.
  public type?: string;

  // DynamoDB settings. See `dynamodb_config` Block for details.
  public dynamodbConfig?: appsync_DataSourceDynamodbConfig;

  // Amazon Elasticsearch settings. See `elasticsearch_config` Block for details.
  public elasticsearchConfig?: appsync_DataSourceElasticsearchConfig;

  // User-supplied name for the data source.
  public name?: string;

  // IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.
  public serviceRoleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "dynamodbConfig",
        "DynamoDB settings. See `dynamodb_config` Block for details.",
        () => appsync_DataSourceDynamodbConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventBridgeConfig",
        "AWS EventBridge settings. See `event_bridge_config` Block for details.",
        () => appsync_DataSourceEventBridgeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "User-supplied name for the data source.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "opensearchserviceConfig",
        "Amazon OpenSearch Service settings. See `opensearchservice_config` Block for details.",
        () => appsync_DataSourceOpensearchserviceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API ID for the GraphQL API for the data source.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the data source.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lambdaConfig",
        "AWS Lambda settings. See `lambda_config` Block for details.",
        () => appsync_DataSourceLambdaConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRoleArn",
        "IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "relationalDatabaseConfig",
        "AWS RDS settings. See `relational_database_config` Block for details.",
        () => appsync_DataSourceRelationalDatabaseConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpConfig",
        "HTTP settings. See `http_config` Block for details.",
        () => appsync_DataSourceHttpConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "elasticsearchConfig",
        "Amazon Elasticsearch settings. See `elasticsearch_config` Block for details.",
        () => appsync_DataSourceElasticsearchConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
