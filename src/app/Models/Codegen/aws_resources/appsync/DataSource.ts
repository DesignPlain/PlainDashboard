import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appsync_DataSourceOpensearchserviceConfig,
  appsync_DataSourceOpensearchserviceConfig_GetTypes,
} from "../types/appsync_DataSourceOpensearchserviceConfig";
import {
  appsync_DataSourceDynamodbConfig,
  appsync_DataSourceDynamodbConfig_GetTypes,
} from "../types/appsync_DataSourceDynamodbConfig";
import {
  appsync_DataSourceEventBridgeConfig,
  appsync_DataSourceEventBridgeConfig_GetTypes,
} from "../types/appsync_DataSourceEventBridgeConfig";
import {
  appsync_DataSourceRelationalDatabaseConfig,
  appsync_DataSourceRelationalDatabaseConfig_GetTypes,
} from "../types/appsync_DataSourceRelationalDatabaseConfig";
import {
  appsync_DataSourceElasticsearchConfig,
  appsync_DataSourceElasticsearchConfig_GetTypes,
} from "../types/appsync_DataSourceElasticsearchConfig";
import {
  appsync_DataSourceHttpConfig,
  appsync_DataSourceHttpConfig_GetTypes,
} from "../types/appsync_DataSourceHttpConfig";
import {
  appsync_DataSourceLambdaConfig,
  appsync_DataSourceLambdaConfig_GetTypes,
} from "../types/appsync_DataSourceLambdaConfig";

export interface DataSourceArgs {
  // API ID for the GraphQL API for the data source.
  apiId?: string;

  // Description of the data source.
  description?: string;

  // Amazon Elasticsearch settings. See ElasticSearch Config
  elasticsearchConfig?: appsync_DataSourceElasticsearchConfig;

  // HTTP settings. See HTTP Config
  httpConfig?: appsync_DataSourceHttpConfig;

  // AWS Lambda settings. See Lambda Config
  lambdaConfig?: appsync_DataSourceLambdaConfig;

  // Amazon OpenSearch Service settings. See OpenSearch Service Config
  opensearchserviceConfig?: appsync_DataSourceOpensearchserviceConfig;

  // DynamoDB settings. See DynamoDB Config
  dynamodbConfig?: appsync_DataSourceDynamodbConfig;

  // AWS EventBridge settings. See Event Bridge Config
  eventBridgeConfig?: appsync_DataSourceEventBridgeConfig;

  // User-supplied name for the data source.
  name?: string;

  // AWS RDS settings. See Relational Database Config
  relationalDatabaseConfig?: appsync_DataSourceRelationalDatabaseConfig;

  // IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.
  serviceRoleArn?: string;

  // Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.
  type?: string;
}
export class DataSource extends Resource {
  // AWS Lambda settings. See Lambda Config
  public lambdaConfig?: appsync_DataSourceLambdaConfig;

  // Amazon OpenSearch Service settings. See OpenSearch Service Config
  public opensearchserviceConfig?: appsync_DataSourceOpensearchserviceConfig;

  // ARN
  public arn?: string;

  // Description of the data source.
  public description?: string;

  // AWS EventBridge settings. See Event Bridge Config
  public eventBridgeConfig?: appsync_DataSourceEventBridgeConfig;

  // HTTP settings. See HTTP Config
  public httpConfig?: appsync_DataSourceHttpConfig;

  // AWS RDS settings. See Relational Database Config
  public relationalDatabaseConfig?: appsync_DataSourceRelationalDatabaseConfig;

  // IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.
  public serviceRoleArn?: string;

  // Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.
  public type?: string;

  // API ID for the GraphQL API for the data source.
  public apiId?: string;

  // DynamoDB settings. See DynamoDB Config
  public dynamodbConfig?: appsync_DataSourceDynamodbConfig;

  // Amazon Elasticsearch settings. See ElasticSearch Config
  public elasticsearchConfig?: appsync_DataSourceElasticsearchConfig;

  // User-supplied name for the data source.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API ID for the GraphQL API for the data source.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "opensearchserviceConfig",
        "Amazon OpenSearch Service settings. See OpenSearch Service Config",
        appsync_DataSourceOpensearchserviceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dynamodbConfig",
        "DynamoDB settings. See DynamoDB Config",
        appsync_DataSourceDynamodbConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "User-supplied name for the data source.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRoleArn",
        "IAM service role ARN for the data source. Required if `type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the data source.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "elasticsearchConfig",
        "Amazon Elasticsearch settings. See ElasticSearch Config",
        appsync_DataSourceElasticsearchConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpConfig",
        "HTTP settings. See HTTP Config",
        appsync_DataSourceHttpConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lambdaConfig",
        "AWS Lambda settings. See Lambda Config",
        appsync_DataSourceLambdaConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventBridgeConfig",
        "AWS EventBridge settings. See Event Bridge Config",
        appsync_DataSourceEventBridgeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "relationalDatabaseConfig",
        "AWS RDS settings. See Relational Database Config",
        appsync_DataSourceRelationalDatabaseConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
