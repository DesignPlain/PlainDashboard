import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigquery_TableExternalDataConfiguration,
  bigquery_TableExternalDataConfiguration_GetTypes,
} from "../types/bigquery_TableExternalDataConfiguration";
import {
  bigquery_TableRangePartitioning,
  bigquery_TableRangePartitioning_GetTypes,
} from "../types/bigquery_TableRangePartitioning";
import {
  bigquery_TableTableReplicationInfo,
  bigquery_TableTableReplicationInfo_GetTypes,
} from "../types/bigquery_TableTableReplicationInfo";
import {
  bigquery_TableView,
  bigquery_TableView_GetTypes,
} from "../types/bigquery_TableView";
import {
  bigquery_TableEncryptionConfiguration,
  bigquery_TableEncryptionConfiguration_GetTypes,
} from "../types/bigquery_TableEncryptionConfiguration";
import {
  bigquery_TableTableConstraints,
  bigquery_TableTableConstraints_GetTypes,
} from "../types/bigquery_TableTableConstraints";
import {
  bigquery_TableTimePartitioning,
  bigquery_TableTimePartitioning_GetTypes,
} from "../types/bigquery_TableTimePartitioning";
import {
  bigquery_TableMaterializedView,
  bigquery_TableMaterializedView_GetTypes,
} from "../types/bigquery_TableMaterializedView";

export interface TableArgs {
  /*
If set to true, queries over this table
require a partition filter that can be used for partition elimination to be
specified.
*/
  requirePartitionFilter?: boolean;

  /*
A JSON schema for the external table. Schema is required
for CSV and JSON formats if autodetect is not on. Schema is disallowed
for Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.
~>--NOTE:-- Because this field expects a JSON string, any changes to the
string will create a diff, even if the JSON itself hasn't changed.
Furthermore drift for this field cannot not be detected because BigQuery
only uses this schema to compute the effective schema for the table, therefore
any changes on the configured value will force the table to be recreated.
This schema is effectively only applied when creating a table from an external
datasource, after creation the computed schema will be stored in
`google_bigquery_table.schema`

~>--NOTE:-- If you set `external_data_configuration.connection_id`, the
table schema must be specified using the top-level `schema` field
documented above.
*/
  schema?: string;

  // Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".
  tableReplicationInfo?: bigquery_TableTableReplicationInfo;

  /*
If specified, configures this table as a view.
Structure is documented below.
*/
  view?: bigquery_TableView;

  /*
Specifies how the table should be encrypted.
If left blank, the table will be encrypted with a Google-managed key; that process
is transparent to the user.  Structure is documented below.
*/
  encryptionConfiguration?: bigquery_TableEncryptionConfiguration;

  /*
The time when this table expires, in
milliseconds since the epoch. If not present, the table will persist
indefinitely. Expired tables will be deleted and their storage
reclaimed.
*/
  expirationTime?: number;

  /*
Defines the primary key and foreign keys. 
Structure is documented below.
*/
  tableConstraints?: bigquery_TableTableConstraints;

  /*
If specified, configures time-based
partitioning for this table. Structure is documented below.
*/
  timePartitioning?: bigquery_TableTimePartitioning;

  /*
If specified, configures this table as a materialized view.
Structure is documented below.
*/
  materializedView?: bigquery_TableMaterializedView;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
Describes the data format,
location, and other properties of a table stored outside of BigQuery.
By defining these properties, the data source can then be queried as
if it were a standard BigQuery table. Structure is documented below.
*/
  externalDataConfiguration?: bigquery_TableExternalDataConfiguration;

  /*
A mapping of labels to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
If specified, configures range-based
partitioning for this table. Structure is documented below.
*/
  rangePartitioning?: bigquery_TableRangePartitioning;

  /*
Specifies column names to use for data clustering.
Up to four top-level columns are allowed, and should be specified in
descending priority order.
*/
  clusterings?: Array<string>;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `=destroy` or `=update` that would delete the instance will fail.
*/
  deletionProtection?: boolean;

  // A descriptive name for the table.
  friendlyName?: string;

  /*
The maximum staleness of data that could be
returned when the table (or stale MV) is queried. Staleness encoded as a
string encoding of [SQL IntervalValue
type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
*/
  maxStaleness?: string;

  /*
A unique ID for the resource.
Changing this forces a new resource to be created.
*/
  tableId?: string;

  /*
The dataset ID to create the table in.
Changing this forces a new resource to be created.
*/
  datasetId?: string;

  // The field description.
  description?: string;
}
export class Table extends Resource {
  /*
Defines the primary key and foreign keys. 
Structure is documented below.
*/
  public tableConstraints?: bigquery_TableTableConstraints;

  // The time when this table was created, in milliseconds since the epoch.
  public creationTime?: number;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
If set to true, queries over this table
require a partition filter that can be used for partition elimination to be
specified.
*/
  public requirePartitionFilter?: boolean;

  /*
A JSON schema for the external table. Schema is required
for CSV and JSON formats if autodetect is not on. Schema is disallowed
for Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.
~>--NOTE:-- Because this field expects a JSON string, any changes to the
string will create a diff, even if the JSON itself hasn't changed.
Furthermore drift for this field cannot not be detected because BigQuery
only uses this schema to compute the effective schema for the table, therefore
any changes on the configured value will force the table to be recreated.
This schema is effectively only applied when creating a table from an external
datasource, after creation the computed schema will be stored in
`google_bigquery_table.schema`

~>--NOTE:-- If you set `external_data_configuration.connection_id`, the
table schema must be specified using the top-level `schema` field
documented above.
*/
  public schema?: string;

  /*
If specified, configures this table as a view.
Structure is documented below.
*/
  public view?: bigquery_TableView;

  /*
The dataset ID to create the table in.
Changing this forces a new resource to be created.
*/
  public datasetId?: string;

  /*
Describes the data format,
location, and other properties of a table stored outside of BigQuery.
By defining these properties, the data source can then be queried as
if it were a standard BigQuery table. Structure is documented below.
*/
  public externalDataConfiguration?: bigquery_TableExternalDataConfiguration;

  // The geographic location where the table resides. This value is inherited from the dataset.
  public location?: string;

  /*
If specified, configures time-based
partitioning for this table. Structure is documented below.
*/
  public timePartitioning?: bigquery_TableTimePartitioning;

  /*
The time when this table expires, in
milliseconds since the epoch. If not present, the table will persist
indefinitely. Expired tables will be deleted and their storage
reclaimed.
*/
  public expirationTime?: number;

  // The time when this table was last modified, in milliseconds since the epoch.
  public lastModifiedTime?: number;

  /*
If specified, configures this table as a materialized view.
Structure is documented below.
*/
  public materializedView?: bigquery_TableMaterializedView;

  // The number of bytes in the table that are considered "long-term storage".
  public numLongTermBytes?: number;

  /*
If specified, configures range-based
partitioning for this table. Structure is documented below.
*/
  public rangePartitioning?: bigquery_TableRangePartitioning;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `=destroy` or `=update` that would delete the instance will fail.
*/
  public deletionProtection?: boolean;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

- <a name="schema"></a>`schema` - (Optional) A JSON schema for the table.

~>--NOTE:-- Because this field expects a JSON string, any changes to the
string will create a diff, even if the JSON itself hasn't changed.
If the API returns a different value for the same schema, e.g. it
switched the order of values or replaced `STRUCT` field type with `RECORD`
field type, we currently cannot suppress the recurring diff this causes.
As a workaround, we recommend using the schema as returned by the API.

~>--NOTE:--  If you use `external_data_configuration`
documented below and do --not-- set
`external_data_configuration.connection_id`, schemas must be specified
with `external_data_configuration.schema`. Otherwise, schemas must be
specified with this top-level field.
*/
  public effectiveLabels?: Map<string, string>;

  // Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".
  public tableReplicationInfo?: bigquery_TableTableReplicationInfo;

  /*
Specifies column names to use for data clustering.
Up to four top-level columns are allowed, and should be specified in
descending priority order.
*/
  public clusterings?: Array<string>;

  // The size of this table in bytes, excluding any data in the streaming buffer.
  public numBytes?: number;

  /*
A mapping of labels to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // A descriptive name for the table.
  public friendlyName?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
A unique ID for the resource.
Changing this forces a new resource to be created.
*/
  public tableId?: string;

  /*
Specifies how the table should be encrypted.
If left blank, the table will be encrypted with a Google-managed key; that process
is transparent to the user.  Structure is documented below.
*/
  public encryptionConfiguration?: bigquery_TableEncryptionConfiguration;

  // A hash of the resource.
  public etag?: string;

  // The number of rows of data in this table, excluding any data in the streaming buffer.
  public numRows?: number;

  /*
The supported types are DAY, HOUR, MONTH, and YEAR,
which will generate one partition per day, hour, month, and year, respectively.
*/
  public type?: string;

  // The field description.
  public description?: string;

  /*
The maximum staleness of data that could be
returned when the table (or stale MV) is queried. Staleness encoded as a
string encoding of [SQL IntervalValue
type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
*/
  public maxStaleness?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timePartitioning",
        "If specified, configures time-based\npartitioning for this table. Structure is documented below.",
        bigquery_TableTimePartitioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow the provider to destroy the instance. Unless this field is set to false\nin state, a `=destroy` or `=update` that would delete the instance will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "view",
        "If specified, configures this table as a view.\nStructure is documented below.",
        bigquery_TableView_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "expirationTime",
        "The time when this table expires, in\nmilliseconds since the epoch. If not present, the table will persist\nindefinitely. Expired tables will be deleted and their storage\nreclaimed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "materializedView",
        "If specified, configures this table as a materialized view.\nStructure is documented below.",
        bigquery_TableMaterializedView_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A mapping of labels to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maxStaleness",
        "The maximum staleness of data that could be\nreturned when the table (or stale MV) is queried. Staleness encoded as a\nstring encoding of [SQL IntervalValue\ntype](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "datasetId",
        "The dataset ID to create the table in.\nChanging this forces a new resource to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requirePartitionFilter",
        "If set to true, queries over this table\nrequire a partition filter that can be used for partition elimination to be\nspecified.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schema",
        "A JSON schema for the external table. Schema is required\nfor CSV and JSON formats if autodetect is not on. Schema is disallowed\nfor Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.\n~>**NOTE:** Because this field expects a JSON string, any changes to the\nstring will create a diff, even if the JSON itself hasn't changed.\nFurthermore drift for this field cannot not be detected because BigQuery\nonly uses this schema to compute the effective schema for the table, therefore\nany changes on the configured value will force the table to be recreated.\nThis schema is effectively only applied when creating a table from an external\ndatasource, after creation the computed schema will be stored in\n`google_bigquery_table.schema`\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tableReplicationInfo",
        'Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".',
        bigquery_TableTableReplicationInfo_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tableConstraints",
        "Defines the primary key and foreign keys. \nStructure is documented below.",
        bigquery_TableTableConstraints_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clusterings",
        "Specifies column names to use for data clustering.\nUp to four top-level columns are allowed, and should be specified in\ndescending priority order.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "friendlyName",
        "A descriptive name for the table.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "Specifies how the table should be encrypted.\nIf left blank, the table will be encrypted with a Google-managed key; that process\nis transparent to the user.  Structure is documented below.",
        bigquery_TableEncryptionConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "externalDataConfiguration",
        "Describes the data format,\nlocation, and other properties of a table stored outside of BigQuery.\nBy defining these properties, the data source can then be queried as\nif it were a standard BigQuery table. Structure is documented below.",
        bigquery_TableExternalDataConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rangePartitioning",
        "If specified, configures range-based\npartitioning for this table. Structure is documented below.",
        bigquery_TableRangePartitioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableId",
        "A unique ID for the resource.\nChanging this forces a new resource to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The field description.",
        [],
        false,
        false,
      ),
    ];
  }
}
