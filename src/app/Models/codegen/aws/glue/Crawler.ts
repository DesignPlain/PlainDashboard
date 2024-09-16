import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_CrawlerIcebergTarget,
  glue_CrawlerIcebergTarget_GetTypes,
} from '../types/glue_CrawlerIcebergTarget';
import {
  glue_CrawlerMongodbTarget,
  glue_CrawlerMongodbTarget_GetTypes,
} from '../types/glue_CrawlerMongodbTarget';
import {
  glue_CrawlerDeltaTarget,
  glue_CrawlerDeltaTarget_GetTypes,
} from '../types/glue_CrawlerDeltaTarget';
import {
  glue_CrawlerLineageConfiguration,
  glue_CrawlerLineageConfiguration_GetTypes,
} from '../types/glue_CrawlerLineageConfiguration';
import {
  glue_CrawlerCatalogTarget,
  glue_CrawlerCatalogTarget_GetTypes,
} from '../types/glue_CrawlerCatalogTarget';
import {
  glue_CrawlerDynamodbTarget,
  glue_CrawlerDynamodbTarget_GetTypes,
} from '../types/glue_CrawlerDynamodbTarget';
import {
  glue_CrawlerRecrawlPolicy,
  glue_CrawlerRecrawlPolicy_GetTypes,
} from '../types/glue_CrawlerRecrawlPolicy';
import {
  glue_CrawlerS3Target,
  glue_CrawlerS3Target_GetTypes,
} from '../types/glue_CrawlerS3Target';
import {
  glue_CrawlerHudiTarget,
  glue_CrawlerHudiTarget_GetTypes,
} from '../types/glue_CrawlerHudiTarget';
import {
  glue_CrawlerLakeFormationConfiguration,
  glue_CrawlerLakeFormationConfiguration_GetTypes,
} from '../types/glue_CrawlerLakeFormationConfiguration';
import {
  glue_CrawlerSchemaChangePolicy,
  glue_CrawlerSchemaChangePolicy_GetTypes,
} from '../types/glue_CrawlerSchemaChangePolicy';
import {
  glue_CrawlerJdbcTarget,
  glue_CrawlerJdbcTarget_GetTypes,
} from '../types/glue_CrawlerJdbcTarget';

export interface CrawlerArgs {
  // The table prefix used for catalog tables that are created.
  tablePrefix?: string;

  // List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.
  catalogTargets?: Array<glue_CrawlerCatalogTarget>;

  // List of nested DynamoDB target arguments. See Dynamodb Target below.
  dynamodbTargets?: Array<glue_CrawlerDynamodbTarget>;

  // Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.
  lakeFormationConfiguration?: glue_CrawlerLakeFormationConfiguration;

  // A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.
  recrawlPolicy?: glue_CrawlerRecrawlPolicy;

  // List of nested Amazon S3 target arguments. See S3 Target below.
  s3Targets?: Array<glue_CrawlerS3Target>;

  // The name of Security Configuration to be used by the crawler
  securityConfiguration?: string;

  // JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
  configuration?: string;

  // Glue database where results are written.
  databaseName?: string;

  // List of nested Iceberg target arguments. See Iceberg Target below.
  icebergTargets?: Array<glue_CrawlerIcebergTarget>;

  // List of nested MongoDB target arguments. See MongoDB Target below.
  mongodbTargets?: Array<glue_CrawlerMongodbTarget>;

  // List of nested Delta Lake target arguments. See Delta Target below.
  deltaTargets?: Array<glue_CrawlerDeltaTarget>;

  // Description of the crawler.
  description?: string;

  // Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.
  lineageConfiguration?: glue_CrawlerLineageConfiguration;

  // A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 - - ? -)`.
  schedule?: string;

  // Policy for the crawler's update and deletion behavior. See Schema Change Policy below.
  schemaChangePolicy?: glue_CrawlerSchemaChangePolicy;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
  classifiers?: Array<string>;

  // List of nested Hudi target arguments. See Iceberg Target below.
  hudiTargets?: Array<glue_CrawlerHudiTarget>;

  // List of nested JDBC target arguments. See JDBC Target below.
  jdbcTargets?: Array<glue_CrawlerJdbcTarget>;

  // Name of the crawler.
  name?: string;

  // The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.
  role?: string;
}
export class Crawler extends DS_Resource {
  // Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.
  public lineageConfiguration?: glue_CrawlerLineageConfiguration;

  // List of nested MongoDB target arguments. See MongoDB Target below.
  public mongodbTargets?: Array<glue_CrawlerMongodbTarget>;

  // The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.
  public role?: string;

  // The name of Security Configuration to be used by the crawler
  public securityConfiguration?: string;

  // Description of the crawler.
  public description?: string;

  // List of nested JDBC target arguments. See JDBC Target below.
  public jdbcTargets?: Array<glue_CrawlerJdbcTarget>;

  // A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.
  public recrawlPolicy?: glue_CrawlerRecrawlPolicy;

  // A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 - - ? -)`.
  public schedule?: string;

  // List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
  public classifiers?: Array<string>;

  // List of nested Iceberg target arguments. See Iceberg Target below.
  public icebergTargets?: Array<glue_CrawlerIcebergTarget>;

  // Name of the crawler.
  public name?: string;

  // Policy for the crawler's update and deletion behavior. See Schema Change Policy below.
  public schemaChangePolicy?: glue_CrawlerSchemaChangePolicy;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the crawler
  public arn?: string;

  // JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
  public configuration?: string;

  // Glue database where results are written.
  public databaseName?: string;

  // List of nested Delta Lake target arguments. See Delta Target below.
  public deltaTargets?: Array<glue_CrawlerDeltaTarget>;

  // List of nested DynamoDB target arguments. See Dynamodb Target below.
  public dynamodbTargets?: Array<glue_CrawlerDynamodbTarget>;

  // List of nested Hudi target arguments. See Iceberg Target below.
  public hudiTargets?: Array<glue_CrawlerHudiTarget>;

  // Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.
  public lakeFormationConfiguration?: glue_CrawlerLakeFormationConfiguration;

  // List of nested Amazon S3 target arguments. See S3 Target below.
  public s3Targets?: Array<glue_CrawlerS3Target>;

  // List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.
  public catalogTargets?: Array<glue_CrawlerCatalogTarget>;

  // The table prefix used for catalog tables that are created.
  public tablePrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'jdbcTargets',
        'List of nested JDBC target arguments. See JDBC Target below.',
        () => glue_CrawlerJdbcTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The IAM role friendly name (including path without leading slash), or ARN of an IAM role, used by the crawler to access other resources.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'icebergTargets',
        'List of nested Iceberg target arguments. See Iceberg Target below.',
        () => glue_CrawlerIcebergTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'deltaTargets',
        'List of nested Delta Lake target arguments. See Delta Target below.',
        () => glue_CrawlerDeltaTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lineageConfiguration',
        'Specifies data lineage configuration settings for the crawler. See Lineage Configuration below.',
        () => glue_CrawlerLineageConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'classifiers',
        'List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'hudiTargets',
        'List of nested Hudi target arguments. See Iceberg Target below.',
        () => glue_CrawlerHudiTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'dynamodbTargets',
        'List of nested DynamoDB target arguments. See Dynamodb Target below.',
        () => glue_CrawlerDynamodbTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'configuration',
        'JSON string of configuration information. For more details see [Setting Crawler Configuration Options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'schedule',
        'A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'mongodbTargets',
        'List of nested MongoDB target arguments. See MongoDB Target below.',
        () => glue_CrawlerMongodbTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the crawler.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'schemaChangePolicy',
        "Policy for the crawler's update and deletion behavior. See Schema Change Policy below.",
        () => glue_CrawlerSchemaChangePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the crawler.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'catalogTargets',
        'List of nested AWS Glue Data Catalog target arguments. See Catalog Target below.',
        () => glue_CrawlerCatalogTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        's3Targets',
        'List of nested Amazon S3 target arguments. See S3 Target below.',
        () => glue_CrawlerS3Target_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'databaseName',
        'Glue database where results are written.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'securityConfiguration',
        'The name of Security Configuration to be used by the crawler',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tablePrefix',
        'The table prefix used for catalog tables that are created.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lakeFormationConfiguration',
        'Specifies Lake Formation configuration settings for the crawler. See Lake Formation Configuration below.',
        () => glue_CrawlerLakeFormationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'recrawlPolicy',
        'A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.. See Recrawl Policy below.',
        () => glue_CrawlerRecrawlPolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
