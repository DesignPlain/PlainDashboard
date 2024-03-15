import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TableView } from "../types/TableView";
import { TableMaterializedView } from "../types/TableMaterializedView";
import { TableEncryptionConfiguration } from "../types/TableEncryptionConfiguration";
import { TableTableConstraints } from "../types/TableTableConstraints";
import { TableTimePartitioning } from "../types/TableTimePartitioning";
import { TableExternalDataConfiguration } from "../types/TableExternalDataConfiguration";
import { TableRangePartitioning } from "../types/TableRangePartitioning";
import { TableTableReplicationInfo } from "../types/TableTableReplicationInfo";

export interface TableArgs {
  /*
The time when this table expires, in
milliseconds since the epoch. If not present, the table will persist
indefinitely. Expired tables will be deleted and their storage
reclaimed.
*/
  ExpirationTime?: number;

  /*
If specified, configures this table as a materialized view.
Structure is documented below.
*/
  MaterializedView?: TableMaterializedView;

  /*
The maximum staleness of data that could be
returned when the table (or stale MV) is queried. Staleness encoded as a
string encoding of [SQL IntervalValue
type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
*/
  MaxStaleness?: string;

  // The field description.
  Description?: string;

  /*
Specifies how the table should be encrypted.
If left blank, the table will be encrypted with a Google-managed key; that process
is transparent to the user.  Structure is documented below.
*/
  EncryptionConfiguration?: TableEncryptionConfiguration;

  // A descriptive name for the table.
  FriendlyName?: string;

  /*
A mapping of labels to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Defines the primary key and foreign keys. 
Structure is documented below.
*/
  TableConstraints?: TableTableConstraints;

  /*
A unique ID for the resource.
Changing this forces a new resource to be created.
*/
  TableId?: string;

  /*
If specified, configures time-based
partitioning for this table. Structure is documented below.
*/
  TimePartitioning?: TableTimePartitioning;

  /*
Specifies column names to use for data clustering.
Up to four top-level columns are allowed, and should be specified in
descending priority order.
*/
  Clusterings?: Array<string>;

  /*
Describes the data format,
location, and other properties of a table stored outside of BigQuery.
By defining these properties, the data source can then be queried as
if it were a standard BigQuery table. Structure is documented below.
*/
  ExternalDataConfiguration?: TableExternalDataConfiguration;

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
  Schema?: string;

  /*
The dataset ID to create the table in.
Changing this forces a new resource to be created.
*/
  DatasetId?: string;

  /*
If specified, configures range-based
partitioning for this table. Structure is documented below.
*/
  RangePartitioning?: TableRangePartitioning;

  /*
If set to true, queries over this table
require a partition filter that can be used for partition elimination to be
specified.
*/
  RequirePartitionFilter?: boolean;

  // Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".
  TableReplicationInfo?: TableTableReplicationInfo;

  /*
If specified, configures this table as a view.
Structure is documented below.
*/
  View?: TableView;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `=destroy` or `=update` that would delete the instance will fail.
*/
  DeletionProtection?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;
}
export class Table extends Resource {
  // The number of bytes in the table that are considered "long-term storage".
  public NumLongTermBytes?: number;

  /*
Defines the primary key and foreign keys. 
Structure is documented below.
*/
  public TableConstraints?: TableTableConstraints;

  /*
Specifies column names to use for data clustering.
Up to four top-level columns are allowed, and should be specified in
descending priority order.
*/
  public Clusterings?: Array<string>;

  // The field description.
  public Description?: string;

  /*
A mapping of labels to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
If specified, configures range-based
partitioning for this table. Structure is documented below.
*/
  public RangePartitioning?: TableRangePartitioning;

  /*
If specified, configures this table as a view.
Structure is documented below.
*/
  public View?: TableView;

  /*
The dataset ID to create the table in.
Changing this forces a new resource to be created.
*/
  public DatasetId?: string;

  /*
Whether or not to allow the provider to destroy the instance. Unless this field is set to false
in state, a `=destroy` or `=update` that would delete the instance will fail.
*/
  public DeletionProtection?: boolean;

  // The time when this table was last modified, in milliseconds since the epoch.
  public LastModifiedTime?: number;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The supported types are DAY, HOUR, MONTH, and YEAR,
which will generate one partition per day, hour, month, and year, respectively.
*/
  public Type?: string;

  // The size of this table in bytes, excluding any data in the streaming buffer.
  public NumBytes?: number;

  // The number of rows of data in this table, excluding any data in the streaming buffer.
  public NumRows?: number;

  // The geographic location where the table resides. This value is inherited from the dataset.
  public Location?: string;

  /*
The maximum staleness of data that could be
returned when the table (or stale MV) is queried. Staleness encoded as a
string encoding of [SQL IntervalValue
type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
*/
  public MaxStaleness?: string;

  /*
If set to true, queries over this table
require a partition filter that can be used for partition elimination to be
specified.
*/
  public RequirePartitionFilter?: boolean;

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
  public Schema?: string;

  /*
If specified, configures time-based
partitioning for this table. Structure is documented below.
*/
  public TimePartitioning?: TableTimePartitioning;

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
  public EffectiveLabels?: Map<string, string>;

  /*
The time when this table expires, in
milliseconds since the epoch. If not present, the table will persist
indefinitely. Expired tables will be deleted and their storage
reclaimed.
*/
  public ExpirationTime?: number;

  // A descriptive name for the table.
  public FriendlyName?: string;

  /*
Specifies how the table should be encrypted.
If left blank, the table will be encrypted with a Google-managed key; that process
is transparent to the user.  Structure is documented below.
*/
  public EncryptionConfiguration?: TableEncryptionConfiguration;

  // A hash of the resource.
  public Etag?: string;

  /*
A unique ID for the resource.
Changing this forces a new resource to be created.
*/
  public TableId?: string;

  // Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".
  public TableReplicationInfo?: TableTableReplicationInfo;

  /*
Describes the data format,
location, and other properties of a table stored outside of BigQuery.
By defining these properties, the data source can then be queried as
if it were a standard BigQuery table. Structure is documented below.
*/
  public ExternalDataConfiguration?: TableExternalDataConfiguration;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The time when this table was created, in milliseconds since the epoch.
  public CreationTime?: number;

  /*
If specified, configures this table as a materialized view.
Structure is documented below.
*/
  public MaterializedView?: TableMaterializedView;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EncryptionConfiguration",
        "Specifies how the table should be encrypted.\nIf left blank, the table will be encrypted with a Google-managed key; that process\nis transparent to the user.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TableId",
        "A unique ID for the resource.\nChanging this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ExpirationTime",
        "The time when this table expires, in\nmilliseconds since the epoch. If not present, the table will persist\nindefinitely. Expired tables will be deleted and their storage\nreclaimed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaterializedView",
        "If specified, configures this table as a materialized view.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Clusterings",
        "Specifies column names to use for data clustering.\nUp to four top-level columns are allowed, and should be specified in\ndescending priority order.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ExternalDataConfiguration",
        "Describes the data format,\nlocation, and other properties of a table stored outside of BigQuery.\nBy defining these properties, the data source can then be queried as\nif it were a standard BigQuery table. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RequirePartitionFilter",
        "If set to true, queries over this table\nrequire a partition filter that can be used for partition elimination to be\nspecified.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A mapping of labels to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TableConstraints",
        "Defines the primary key and foreign keys. \nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatasetId",
        "The dataset ID to create the table in.\nChanging this forces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "View",
        "If specified, configures this table as a view.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeletionProtection",
        "Whether or not to allow the provider to destroy the instance. Unless this field is set to false\nin state, a `=destroy` or `=update` that would delete the instance will fail.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TimePartitioning",
        "If specified, configures time-based\npartitioning for this table. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Schema",
        "A JSON schema for the external table. Schema is required\nfor CSV and JSON formats if autodetect is not on. Schema is disallowed\nfor Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.\n~>**NOTE:** Because this field expects a JSON string, any changes to the\nstring will create a diff, even if the JSON itself hasn't changed.\nFurthermore drift for this field cannot not be detected because BigQuery\nonly uses this schema to compute the effective schema for the table, therefore\nany changes on the configured value will force the table to be recreated.\nThis schema is effectively only applied when creating a table from an external\ndatasource, after creation the computed schema will be stored in\n`google_bigquery_table.schema`\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FriendlyName",
        "A descriptive name for the table.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RangePartitioning",
        "If specified, configures range-based\npartitioning for this table. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TableReplicationInfo",
        'Replication info of a table created using "AS REPLICA" DDL like: "CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv".',
      ),
      new DynamicUIProps(
        InputType.String,
        "MaxStaleness",
        "The maximum staleness of data that could be\nreturned when the table (or stale MV) is queried. Staleness encoded as a\nstring encoding of [SQL IntervalValue\ntype](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The field description.",
      ),
    ];
  }
}
