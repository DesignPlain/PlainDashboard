import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_DatasetDefaultEncryptionConfiguration,
  Bigquery_DatasetDefaultEncryptionConfiguration_GetTypes,
} from "../types/Bigquery_DatasetDefaultEncryptionConfiguration";
import {
  Bigquery_DatasetExternalDatasetReference,
  Bigquery_DatasetExternalDatasetReference_GetTypes,
} from "../types/Bigquery_DatasetExternalDatasetReference";
import {
  Bigquery_DatasetAccess,
  Bigquery_DatasetAccess_GetTypes,
} from "../types/Bigquery_DatasetAccess";

export interface DatasetArgs {
  /*
The default encryption key for all tables in the dataset. Once this property is set,
all newly-created partitioned tables in the dataset will have encryption key set to
this value, unless table creation request (or query) overrides the key.
Structure is documented below.
*/
  DefaultEncryptionConfiguration?: Bigquery_DatasetDefaultEncryptionConfiguration;

  /*
Specifies the storage billing model for the dataset.
Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.
LOGICAL is the default if this flag isn't specified.
*/
  StorageBillingModel?: string;

  // A descriptive name for the dataset
  FriendlyName?: string;

  /*
TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.
*/
  IsCaseInsensitive?: boolean;

  /*
The labels associated with this dataset. You can use these to
organize and group your datasets.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
If set to `true`, delete all the tables in the
dataset when destroying the resource; otherwise,
destroying the resource will fail if tables are present.
*/
  DeleteContentsOnDestroy?: boolean;

  /*
Information about the external metadata storage where the dataset is defined.
Structure is documented below.
*/
  ExternalDatasetReference?: Bigquery_DatasetExternalDatasetReference;

  // Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
  MaxTimeTravelHours?: string;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  DatasetId?: string;

  /*
Defines the default collation specification of future tables created
in the dataset. If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.
The following values are supported:
- 'und:ci': undetermined locale, case insensitive.
- '': empty string. Default to case-sensitive behavior.
*/
  DefaultCollation?: string;

  /*
The default partition expiration for all partitioned tables in
the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an `expirationMs` property in the `timePartitioning`
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of `defaultTableExpirationMs`
for partitioned tables: only one of `defaultTableExpirationMs` and
`defaultPartitionExpirationMs` will be used for any new partitioned
table. If you provide an explicit `timePartitioning.expirationMs` when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.
*/
  DefaultPartitionExpirationMs?: number;

  /*
The geographic location where the dataset should reside.
See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).

There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.

The default value is multi-regional location `US`.
Changing this forces a new resource to be created.
*/
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
An array of objects that define dataset access for one or more entities.
Structure is documented below.
*/
  Accesses?: Array<Bigquery_DatasetAccess>;

  /*
The default lifetime of all tables in the dataset, in milliseconds.
The minimum value is 3600000 milliseconds (one hour).

Once this property is set, all newly-created tables in the dataset
will have an `expirationTime` property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the `expirationTime` for a given
table is reached, that table will be deleted automatically.
If a table's `expirationTime` is modified or removed before the
table expires, or if you provide an explicit `expirationTime` when
creating a table, that value takes precedence over the default
expiration time indicated by this property.
*/
  DefaultTableExpirationMs?: number;

  // A user-friendly description of the dataset
  Description?: string;
}
export class Dataset extends Resource {
  /*
The default lifetime of all tables in the dataset, in milliseconds.
The minimum value is 3600000 milliseconds (one hour).

Once this property is set, all newly-created tables in the dataset
will have an `expirationTime` property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the `expirationTime` for a given
table is reached, that table will be deleted automatically.
If a table's `expirationTime` is modified or removed before the
table expires, or if you provide an explicit `expirationTime` when
creating a table, that value takes precedence over the default
expiration time indicated by this property.
*/
  public DefaultTableExpirationMs?: number;

  // A hash of the resource.
  public Etag?: string;

  /*
The date when this dataset or any of its tables was last modified, in
milliseconds since the epoch.
*/
  public LastModifiedTime?: number;

  /*
The geographic location where the dataset should reside.
See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).

There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.

The default value is multi-regional location `US`.
Changing this forces a new resource to be created.
*/
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
An array of objects that define dataset access for one or more entities.
Structure is documented below.
*/
  public Accesses?: Array<Bigquery_DatasetAccess>;

  /*
The time when this dataset was created, in milliseconds since the
epoch.
*/
  public CreationTime?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Information about the external metadata storage where the dataset is defined.
Structure is documented below.
*/
  public ExternalDatasetReference?: Bigquery_DatasetExternalDatasetReference;

  // Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
  public MaxTimeTravelHours?: string;

  /*
Defines the default collation specification of future tables created
in the dataset. If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.
The following values are supported:
- 'und:ci': undetermined locale, case insensitive.
- '': empty string. Default to case-sensitive behavior.
*/
  public DefaultCollation?: string;

  /*
The default partition expiration for all partitioned tables in
the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an `expirationMs` property in the `timePartitioning`
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of `defaultTableExpirationMs`
for partitioned tables: only one of `defaultTableExpirationMs` and
`defaultPartitionExpirationMs` will be used for any new partitioned
table. If you provide an explicit `timePartitioning.expirationMs` when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.
*/
  public DefaultPartitionExpirationMs?: number;

  /*
If set to `true`, delete all the tables in the
dataset when destroying the resource; otherwise,
destroying the resource will fail if tables are present.
*/
  public DeleteContentsOnDestroy?: boolean;

  // A descriptive name for the dataset
  public FriendlyName?: string;

  /*
TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.
*/
  public IsCaseInsensitive?: boolean;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Specifies the storage billing model for the dataset.
Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.
LOGICAL is the default if this flag isn't specified.
*/
  public StorageBillingModel?: string;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  public DatasetId?: string;

  /*
The default encryption key for all tables in the dataset. Once this property is set,
all newly-created partitioned tables in the dataset will have encryption key set to
this value, unless table creation request (or query) overrides the key.
Structure is documented below.
*/
  public DefaultEncryptionConfiguration?: Bigquery_DatasetDefaultEncryptionConfiguration;

  // A user-friendly description of the dataset
  public Description?: string;

  /*
The labels associated with this dataset. You can use these to
organize and group your datasets.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "DefaultPartitionExpirationMs",
        "The default partition expiration for all partitioned tables in\nthe dataset, in milliseconds.\n\nOnce this property is set, all newly-created partitioned tables in\nthe dataset will have an `expirationMs` property in the `timePartitioning`\nsettings set to this value, and changing the value will only\naffect new tables, not existing ones. The storage in a partition will\nhave an expiration time of its partition time plus this value.\nSetting this property overrides the use of `defaultTableExpirationMs`\nfor partitioned tables: only one of `defaultTableExpirationMs` and\n`defaultPartitionExpirationMs` will be used for any new partitioned\ntable. If you provide an explicit `timePartitioning.expirationMs` when\ncreating or updating a partitioned table, that value takes precedence\nover the default partition expiration time indicated by this property.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatasetId",
        "A unique ID for this dataset, without the project name. The ID\nmust contain only letters (a-z, A-Z), numbers (0-9), or\nunderscores (_). The maximum length is 1,024 characters.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the dataset should reside.\nSee [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).\n\nThere are two types of locations, regional or multi-regional. A regional\nlocation is a specific geographic place, such as Tokyo, and a multi-regional\nlocation is a large geographic area, such as the United States, that\ncontains at least two geographic places.\n\nThe default value is multi-regional location `US`.\nChanging this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Accesses",
        "An array of objects that define dataset access for one or more entities.\nStructure is documented below.",
        Bigquery_DatasetAccess_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultEncryptionConfiguration",
        "The default encryption key for all tables in the dataset. Once this property is set,\nall newly-created partitioned tables in the dataset will have encryption key set to\nthis value, unless table creation request (or query) overrides the key.\nStructure is documented below.",
        Bigquery_DatasetDefaultEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StorageBillingModel",
        "Specifies the storage billing model for the dataset.\nSet this flag value to LOGICAL to use logical bytes for storage billing,\nor to PHYSICAL to use physical bytes instead.\nLOGICAL is the default if this flag isn't specified.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "FriendlyName",
        "A descriptive name for the dataset",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels associated with this dataset. You can use these to\norganize and group your datasets.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MaxTimeTravelHours",
        "Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultCollation",
        "Defines the default collation specification of future tables created\nin the dataset. If a table is created in this dataset without table-level\ndefault collation, then the table inherits the dataset default collation,\nwhich is applied to the string fields that do not have explicit collation\nspecified. A change to this field affects only tables created afterwards,\nand does not alter the existing tables.\nThe following values are supported:\n- 'und:ci': undetermined locale, case insensitive.\n- '': empty string. Default to case-sensitive behavior.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "DefaultTableExpirationMs",
        "The default lifetime of all tables in the dataset, in milliseconds.\nThe minimum value is 3600000 milliseconds (one hour).\n\nOnce this property is set, all newly-created tables in the dataset\nwill have an `expirationTime` property set to the creation time plus\nthe value in this property, and changing the value will only affect\nnew tables, not existing ones. When the `expirationTime` for a given\ntable is reached, that table will be deleted automatically.\nIf a table's `expirationTime` is modified or removed before the\ntable expires, or if you provide an explicit `expirationTime` when\ncreating a table, that value takes precedence over the default\nexpiration time indicated by this property.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsCaseInsensitive",
        "TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.\nBy default, this is FALSE, which means the dataset and its table names are\ncase-sensitive. This field does not affect routine references.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeleteContentsOnDestroy",
        "If set to `true`, delete all the tables in the\ndataset when destroying the resource; otherwise,\ndestroying the resource will fail if tables are present.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ExternalDatasetReference",
        "Information about the external metadata storage where the dataset is defined.\nStructure is documented below.",
        Bigquery_DatasetExternalDatasetReference_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A user-friendly description of the dataset",
        [],
        false,
        false,
      ),
    ];
  }
}
