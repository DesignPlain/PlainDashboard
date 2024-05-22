import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSourceParametersOracle,
  quicksight_DataSourceParametersOracle_GetTypes,
} from "./quicksight_DataSourceParametersOracle";
import {
  quicksight_DataSourceParametersRds,
  quicksight_DataSourceParametersRds_GetTypes,
} from "./quicksight_DataSourceParametersRds";
import {
  quicksight_DataSourceParametersS3,
  quicksight_DataSourceParametersS3_GetTypes,
} from "./quicksight_DataSourceParametersS3";
import {
  quicksight_DataSourceParametersJira,
  quicksight_DataSourceParametersJira_GetTypes,
} from "./quicksight_DataSourceParametersJira";
import {
  quicksight_DataSourceParametersMariaDb,
  quicksight_DataSourceParametersMariaDb_GetTypes,
} from "./quicksight_DataSourceParametersMariaDb";
import {
  quicksight_DataSourceParametersAurora,
  quicksight_DataSourceParametersAurora_GetTypes,
} from "./quicksight_DataSourceParametersAurora";
import {
  quicksight_DataSourceParametersAwsIotAnalytics,
  quicksight_DataSourceParametersAwsIotAnalytics_GetTypes,
} from "./quicksight_DataSourceParametersAwsIotAnalytics";
import {
  quicksight_DataSourceParametersSnowflake,
  quicksight_DataSourceParametersSnowflake_GetTypes,
} from "./quicksight_DataSourceParametersSnowflake";
import {
  quicksight_DataSourceParametersAthena,
  quicksight_DataSourceParametersAthena_GetTypes,
} from "./quicksight_DataSourceParametersAthena";
import {
  quicksight_DataSourceParametersSpark,
  quicksight_DataSourceParametersSpark_GetTypes,
} from "./quicksight_DataSourceParametersSpark";
import {
  quicksight_DataSourceParametersTeradata,
  quicksight_DataSourceParametersTeradata_GetTypes,
} from "./quicksight_DataSourceParametersTeradata";
import {
  quicksight_DataSourceParametersTwitter,
  quicksight_DataSourceParametersTwitter_GetTypes,
} from "./quicksight_DataSourceParametersTwitter";
import {
  quicksight_DataSourceParametersMysql,
  quicksight_DataSourceParametersMysql_GetTypes,
} from "./quicksight_DataSourceParametersMysql";
import {
  quicksight_DataSourceParametersPresto,
  quicksight_DataSourceParametersPresto_GetTypes,
} from "./quicksight_DataSourceParametersPresto";
import {
  quicksight_DataSourceParametersSqlServer,
  quicksight_DataSourceParametersSqlServer_GetTypes,
} from "./quicksight_DataSourceParametersSqlServer";
import {
  quicksight_DataSourceParametersRedshift,
  quicksight_DataSourceParametersRedshift_GetTypes,
} from "./quicksight_DataSourceParametersRedshift";
import {
  quicksight_DataSourceParametersAmazonElasticsearch,
  quicksight_DataSourceParametersAmazonElasticsearch_GetTypes,
} from "./quicksight_DataSourceParametersAmazonElasticsearch";
import {
  quicksight_DataSourceParametersAuroraPostgresql,
  quicksight_DataSourceParametersAuroraPostgresql_GetTypes,
} from "./quicksight_DataSourceParametersAuroraPostgresql";
import {
  quicksight_DataSourceParametersPostgresql,
  quicksight_DataSourceParametersPostgresql_GetTypes,
} from "./quicksight_DataSourceParametersPostgresql";
import {
  quicksight_DataSourceParametersServiceNow,
  quicksight_DataSourceParametersServiceNow_GetTypes,
} from "./quicksight_DataSourceParametersServiceNow";

export interface quicksight_DataSourceParameters {
  // Parameters for connecting to Amazon Elasticsearch.
  amazonElasticsearch?: quicksight_DataSourceParametersAmazonElasticsearch;

  // Parameters for connecting to Aurora Postgresql.
  auroraPostgresql?: quicksight_DataSourceParametersAuroraPostgresql;

  // Parameters for connecting to MySQL.
  mysql?: quicksight_DataSourceParametersMysql;

  // Parameters for connecting to Oracle.
  oracle?: quicksight_DataSourceParametersOracle;

  // Parameters for connecting to RDS.
  rds?: quicksight_DataSourceParametersRds;

  // Parameters for connecting to Aurora MySQL.
  aurora?: quicksight_DataSourceParametersAurora;

  // Parameters for connecting to AWS IOT Analytics.
  awsIotAnalytics?: quicksight_DataSourceParametersAwsIotAnalytics;

  // Parameters for connecting to Presto.
  presto?: quicksight_DataSourceParametersPresto;

  // Parameters for connecting to S3.
  s3?: quicksight_DataSourceParametersS3;

  // Parameters for connecting to Snowflake.
  snowflake?: quicksight_DataSourceParametersSnowflake;

  // Parameters for connecting to SQL Server.
  sqlServer?: quicksight_DataSourceParametersSqlServer;

  // Parameters for connecting to Athena.
  athena?: quicksight_DataSourceParametersAthena;

  // Parameters for connecting to Jira.
  jira?: quicksight_DataSourceParametersJira;

  // Parameters for connecting to Postgresql.
  postgresql?: quicksight_DataSourceParametersPostgresql;

  // Parameters for connecting to Redshift.
  redshift?: quicksight_DataSourceParametersRedshift;

  // Parameters for connecting to Spark.
  spark?: quicksight_DataSourceParametersSpark;

  // Parameters for connecting to MariaDB.
  mariaDb?: quicksight_DataSourceParametersMariaDb;

  // Parameters for connecting to ServiceNow.
  serviceNow?: quicksight_DataSourceParametersServiceNow;

  // Parameters for connecting to Teradata.
  teradata?: quicksight_DataSourceParametersTeradata;

  // Parameters for connecting to Twitter.
  twitter?: quicksight_DataSourceParametersTwitter;
}

export function quicksight_DataSourceParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "aurora",
      "Parameters for connecting to Aurora MySQL.",
      quicksight_DataSourceParametersAurora_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mariaDb",
      "Parameters for connecting to MariaDB.",
      quicksight_DataSourceParametersMariaDb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "teradata",
      "Parameters for connecting to Teradata.",
      quicksight_DataSourceParametersTeradata_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "twitter",
      "Parameters for connecting to Twitter.",
      quicksight_DataSourceParametersTwitter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "auroraPostgresql",
      "Parameters for connecting to Aurora Postgresql.",
      quicksight_DataSourceParametersAuroraPostgresql_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Parameters for connecting to S3.",
      quicksight_DataSourceParametersS3_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snowflake",
      "Parameters for connecting to Snowflake.",
      quicksight_DataSourceParametersSnowflake_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redshift",
      "Parameters for connecting to Redshift.",
      quicksight_DataSourceParametersRedshift_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spark",
      "Parameters for connecting to Spark.",
      quicksight_DataSourceParametersSpark_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "athena",
      "Parameters for connecting to Athena.",
      quicksight_DataSourceParametersAthena_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jira",
      "Parameters for connecting to Jira.",
      quicksight_DataSourceParametersJira_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postgresql",
      "Parameters for connecting to Postgresql.",
      quicksight_DataSourceParametersPostgresql_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amazonElasticsearch",
      "Parameters for connecting to Amazon Elasticsearch.",
      quicksight_DataSourceParametersAmazonElasticsearch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mysql",
      "Parameters for connecting to MySQL.",
      quicksight_DataSourceParametersMysql_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rds",
      "Parameters for connecting to RDS.",
      quicksight_DataSourceParametersRds_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "awsIotAnalytics",
      "Parameters for connecting to AWS IOT Analytics.",
      quicksight_DataSourceParametersAwsIotAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqlServer",
      "Parameters for connecting to SQL Server.",
      quicksight_DataSourceParametersSqlServer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oracle",
      "Parameters for connecting to Oracle.",
      quicksight_DataSourceParametersOracle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "presto",
      "Parameters for connecting to Presto.",
      quicksight_DataSourceParametersPresto_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceNow",
      "Parameters for connecting to ServiceNow.",
      quicksight_DataSourceParametersServiceNow_GetTypes(),
      false,
      false,
    ),
  ];
}
