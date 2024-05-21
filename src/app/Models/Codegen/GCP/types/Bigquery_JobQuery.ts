import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_JobQueryScriptOptions,
  bigquery_JobQueryScriptOptions_GetTypes,
} from "./bigquery_JobQueryScriptOptions";
import {
  bigquery_JobQueryUserDefinedFunctionResource,
  bigquery_JobQueryUserDefinedFunctionResource_GetTypes,
} from "./bigquery_JobQueryUserDefinedFunctionResource";
import {
  bigquery_JobQueryDestinationEncryptionConfiguration,
  bigquery_JobQueryDestinationEncryptionConfiguration_GetTypes,
} from "./bigquery_JobQueryDestinationEncryptionConfiguration";
import {
  bigquery_JobQueryDestinationTable,
  bigquery_JobQueryDestinationTable_GetTypes,
} from "./bigquery_JobQueryDestinationTable";
import {
  bigquery_JobQueryDefaultDataset,
  bigquery_JobQueryDefaultDataset_GetTypes,
} from "./bigquery_JobQueryDefaultDataset";

export interface bigquery_JobQuery {
  /*
If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
*/
  flattenResults?: boolean;

  /*
If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.
*/
  allowLargeResults?: boolean;

  /*
Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.
*/
  maximumBytesBilled?: string;

  /*
Options controlling the execution of scripts.
Structure is documented below.
*/
  scriptOptions?: bigquery_JobQueryScriptOptions;

  /*
Describes user-defined function resources used in the query.
Structure is documented below.
*/
  userDefinedFunctionResources?: Array<bigquery_JobQueryUserDefinedFunctionResource>;

  // Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  parameterMode?: string;

  /*
Specifies a priority for the query.
Default value is `INTERACTIVE`.
Possible values are: `INTERACTIVE`, `BATCH`.
*/
  priority?: string;

  /*
Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion.
Default value is `WRITE_EMPTY`.
Possible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.
*/
  writeDisposition?: string;

  /*
Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion
Default value is `CREATE_IF_NEEDED`.
Possible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.
*/
  createDisposition?: string;

  /*
Custom encryption configuration (e.g., Cloud KMS keys)
Structure is documented below.
*/
  destinationEncryptionConfiguration?: bigquery_JobQueryDestinationEncryptionConfiguration;

  /*
Describes the table where the query results should be stored.
This property must be set for large results that exceed the maximum response size.
For queries that produce anonymous (cached) results, this field will be populated by BigQuery.
Structure is documented below.
*/
  destinationTable?: bigquery_JobQueryDestinationTable;

  /*
Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.
*/
  maximumBillingTier?: number;

  /*
Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.
*/
  useQueryCache?: boolean;

  /*
Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter behavior of unqualified dataset names.
Structure is documented below.
*/
  defaultDataset?: bigquery_JobQueryDefaultDataset;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  query?: string;

  /*
Allows the schema of the destination table to be updated as a side effect of the query job.
Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
*/
  schemaUpdateOptions?: Array<string>;

  /*
Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
If set to false, the query will use BigQuery's standard SQL.
*/
  useLegacySql?: boolean;
}

export function bigquery_JobQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destinationEncryptionConfiguration",
      "Custom encryption configuration (e.g., Cloud KMS keys)\nStructure is documented below.",
      bigquery_JobQueryDestinationEncryptionConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maximumBytesBilled",
      "Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).\nIf unspecified, this will be set to your project default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "priority",
      "Specifies a priority for the query.\nDefault value is `INTERACTIVE`.\nPossible values are: `INTERACTIVE`, `BATCH`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "createDisposition",
      "Specifies whether the job is allowed to create new tables. The following values are supported:\nCREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.\nCREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.\nCreation, truncation and append actions occur as one atomic update upon job completion\nDefault value is `CREATE_IF_NEEDED`.\nPossible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useQueryCache",
      "Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever\ntables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.\nThe default value is true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultDataset",
      "Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter behavior of unqualified dataset names.\nStructure is documented below.",
      bigquery_JobQueryDefaultDataset_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "query",
      'SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.\n*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)\n(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "flattenResults",
      "If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.\nallowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "userDefinedFunctionResources",
      "Describes user-defined function resources used in the query.\nStructure is documented below.",
      bigquery_JobQueryUserDefinedFunctionResource_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "writeDisposition",
      "Specifies the action that occurs if the destination table already exists. The following values are supported:\nWRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.\nWRITE_APPEND: If the table already exists, BigQuery appends the data to the table.\nWRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.\nEach action is atomic and only occurs if BigQuery is able to complete the job successfully.\nCreation, truncation and append actions occur as one atomic update upon job completion.\nDefault value is `WRITE_EMPTY`.\nPossible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowLargeResults",
      "If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.\nRequires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.\nHowever, you must still set destinationTable when result size exceeds the allowed maximum response size.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "schemaUpdateOptions",
      "Allows the schema of the destination table to be updated as a side effect of the query job.\nSchema update options are supported in two cases: when writeDisposition is WRITE_APPEND;\nwhen writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,\nspecified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.\nOne or more of the following values are specified:\nALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.\nALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumBillingTier",
      "Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).\nIf unspecified, this will be set to your project default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useLegacySql",
      "Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.\nIf set to false, the query will use BigQuery's standard SQL.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scriptOptions",
      "Options controlling the execution of scripts.\nStructure is documented below.",
      bigquery_JobQueryScriptOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "parameterMode",
      "Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destinationTable",
      "Describes the table where the query results should be stored.\nThis property must be set for large results that exceed the maximum response size.\nFor queries that produce anonymous (cached) results, this field will be populated by BigQuery.\nStructure is documented below.",
      bigquery_JobQueryDestinationTable_GetTypes(),
      false,
      true,
    ),
  ];
}
