import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_CrawlerHudiTarget,
  glue_CrawlerHudiTarget_GetTypes,
} from "../types/glue_CrawlerHudiTarget";
import {
  glue_CrawlerLineageConfiguration,
  glue_CrawlerLineageConfiguration_GetTypes,
} from "../types/glue_CrawlerLineageConfiguration";
import {
  glue_CrawlerS3Target,
  glue_CrawlerS3Target_GetTypes,
} from "../types/glue_CrawlerS3Target";
import {
  glue_CrawlerCatalogTarget,
  glue_CrawlerCatalogTarget_GetTypes,
} from "../types/glue_CrawlerCatalogTarget";
import {
  glue_CrawlerDynamodbTarget,
  glue_CrawlerDynamodbTarget_GetTypes,
} from "../types/glue_CrawlerDynamodbTarget";
import {
  glue_CrawlerRecrawlPolicy,
  glue_CrawlerRecrawlPolicy_GetTypes,
} from "../types/glue_CrawlerRecrawlPolicy";
import {
  glue_CrawlerDeltaTarget,
  glue_CrawlerDeltaTarget_GetTypes,
} from "../types/glue_CrawlerDeltaTarget";
import {
  glue_CrawlerMongodbTarget,
  glue_CrawlerMongodbTarget_GetTypes,
} from "../types/glue_CrawlerMongodbTarget";
import {
  glue_CrawlerIcebergTarget,
  glue_CrawlerIcebergTarget_GetTypes,
} from "../types/glue_CrawlerIcebergTarget";
import {
  glue_CrawlerJdbcTarget,
  glue_CrawlerJdbcTarget_GetTypes,
} from "../types/glue_CrawlerJdbcTarget";
import {
  glue_CrawlerLakeFormationConfiguration,
  glue_CrawlerLakeFormationConfiguration_GetTypes,
} from "../types/glue_CrawlerLakeFormationConfiguration";
import {
  glue_CrawlerSchemaChangePolicy,
  glue_CrawlerSchemaChangePolicy_GetTypes,
} from "../types/glue_CrawlerSchemaChangePolicy";

export interface CrawlerArgs {
  // List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
  classifiers?: Array<string>;

  // Glue database where results are written.
  databaseName?: string;

  // List of nested Delta Lake target arguments. See Delta Target below.
  deltaTargets?: Array<glue_CrawlerDeltaTarget>;

  // List of nested Hudi target arguments. See Iceberg Target below.
  hudiTargets?: Array<glue_CrawlerHudiTarget>;

  // Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.
  lineageConfiguration?: glue_CrawlerLineageConfiguration;

  // Name of the crawler.
  name?: string;

  // The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.
  role?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
  configuration?: string;

  // List of nested MongoDB target arguments. See MongoDB Target below.
  mongodbTargets?: Array<glue_CrawlerMongodbTarget>;

  // A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 - - ? -)`.
  schedule?: string;

  // The name of Security Configuration to be used by the crawler
  securityConfiguration?: string;

  // The table prefix used for catalog tables that are created.
  tablePrefix?: string;

  // Description of the crawler.
  description?: string;

  // List of nested Iceberg target arguments. See Iceberg Target below.
  icebergTargets?: Array<glue_CrawlerIcebergTarget>;

  // List of nested Amazon S3 target arguments. See S3 Target below.
  s3Targets?: Array<glue_CrawlerS3Target>;

  // List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.
  catalogTargets?: Array<glue_CrawlerCatalogTarget>;

  // List of nested DynamoDB target arguments. See Dynamodb Target below.
  dynamodbTargets?: Array<glue_CrawlerDynamodbTarget>;

  // List of nested JDBC target arguments. See JDBC Target below.
  jdbcTargets?: Array<glue_CrawlerJdbcTarget>;

  // Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.
  lakeFormationConfiguration?: glue_CrawlerLakeFormationConfiguration;

  // A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.
  recrawlPolicy?: glue_CrawlerRecrawlPolicy;

  // Policy for the crawler's update and deletion behavior. See Schema Change Policy below.
  schemaChangePolicy?: glue_CrawlerSchemaChangePolicy;
}
export class Crawler extends Resource {
  // List of nested MongoDB target arguments. See MongoDB Target below.
  public mongodbTargets?: Array<glue_CrawlerMongodbTarget>;

  // A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.
  public recrawlPolicy?: glue_CrawlerRecrawlPolicy;

  // A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 - - ? -)`.
  public schedule?: string;

  // List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
  public classifiers?: Array<string>;

  // JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
  public configuration?: string;

  // List of nested Hudi target arguments. See Iceberg Target below.
  public hudiTargets?: Array<glue_CrawlerHudiTarget>;

  // Policy for the crawler's update and deletion behavior. See Schema Change Policy below.
  public schemaChangePolicy?: glue_CrawlerSchemaChangePolicy;

  // The name of Security Configuration to be used by the crawler
  public securityConfiguration?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // List of nested JDBC target arguments. See JDBC Target below.
  public jdbcTargets?: Array<glue_CrawlerJdbcTarget>;

  // Name of the crawler.
  public name?: string;

  // The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.
  public role?: string;

  // Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.
  public lakeFormationConfiguration?: glue_CrawlerLakeFormationConfiguration;

  // List of nested Amazon S3 target arguments. See S3 Target below.
  public s3Targets?: Array<glue_CrawlerS3Target>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.
  public catalogTargets?: Array<glue_CrawlerCatalogTarget>;

  // List of nested DynamoDB target arguments. See Dynamodb Target below.
  public dynamodbTargets?: Array<glue_CrawlerDynamodbTarget>;

  // List of nested Iceberg target arguments. See Iceberg Target below.
  public icebergTargets?: Array<glue_CrawlerIcebergTarget>;

  // Description of the crawler.
  public description?: string;

  // Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.
  public lineageConfiguration?: glue_CrawlerLineageConfiguration;

  // The table prefix used for catalog tables that are created.
  public tablePrefix?: string;

  // The ARN of the crawler
  public arn?: string;

  // Glue database where results are written.
  public databaseName?: string;

  // List of nested Delta Lake target arguments. See Delta Target below.
  public deltaTargets?: Array<glue_CrawlerDeltaTarget>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Glue database where results are written.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "deltaTargets",
        "List of nested Delta Lake target arguments. See Delta Target below.",
        glue_CrawlerDeltaTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "hudiTargets",
        "List of nested Hudi target arguments. See Iceberg Target below.",
        glue_CrawlerHudiTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configuration",
        "JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "mongodbTargets",
        "List of nested MongoDB target arguments. See MongoDB Target below.",
        glue_CrawlerMongodbTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "s3Targets",
        "List of nested Amazon S3 target arguments. See S3 Target below.",
        glue_CrawlerS3Target_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "classifiers",
        "List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "catalogTargets",
        "List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.",
        glue_CrawlerCatalogTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lakeFormationConfiguration",
        "Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.",
        glue_CrawlerLakeFormationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recrawlPolicy",
        "A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.",
        glue_CrawlerRecrawlPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the crawler.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tablePrefix",
        "The table prefix used for catalog tables that are created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "icebergTargets",
        "List of nested Iceberg target arguments. See Iceberg Target below.",
        glue_CrawlerIcebergTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dynamodbTargets",
        "List of nested DynamoDB target arguments. See Dynamodb Target below.",
        glue_CrawlerDynamodbTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "jdbcTargets",
        "List of nested JDBC target arguments. See JDBC Target below.",
        glue_CrawlerJdbcTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lineageConfiguration",
        "Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.",
        glue_CrawlerLineageConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityConfiguration",
        "The name of Security Configuration to be used by the crawler",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the crawler.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schemaChangePolicy",
        "Policy for the crawler's update and deletion behavior. See Schema Change Policy below.",
        glue_CrawlerSchemaChangePolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
