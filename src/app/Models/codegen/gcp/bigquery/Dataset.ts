import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_DatasetDefaultEncryptionConfiguration,
  bigquery_DatasetDefaultEncryptionConfiguration_GetTypes,
} from "../types/bigquery_DatasetDefaultEncryptionConfiguration";
import {
  bigquery_DatasetAccess,
  bigquery_DatasetAccess_GetTypes,
} from "../types/bigquery_DatasetAccess";
import {
  bigquery_DatasetExternalDatasetReference,
  bigquery_DatasetExternalDatasetReference_GetTypes,
} from "../types/bigquery_DatasetExternalDatasetReference";

export interface DatasetArgs {
  /*
The default encryption key for all tables in the dataset. Once this property is set,
all newly-created partitioned tables in the dataset will have encryption key set to
this value, unless table creation request (or query) overrides the key.
Structure is documented below.
*/
  defaultEncryptionConfiguration?: bigquery_DatasetDefaultEncryptionConfiguration;

  // Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
  maxTimeTravelHours?: string;

  /*
An array of objects that define dataset access for one or more entities.
Structure is documented below.
*/
  accesses?: Array<bigquery_DatasetAccess>;

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
  defaultPartitionExpirationMs?: number;

  /*
The labels associated with this dataset. You can use these to
organize and group your datasets.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Specifies the storage billing model for the dataset.
Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.
LOGICAL is the default if this flag isn't specified.
*/
  storageBillingModel?: string;

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
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  datasetId?: string;

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
  defaultCollation?: string;

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
  defaultTableExpirationMs?: number;

  /*
Information about the external metadata storage where the dataset is defined.
Structure is documented below.
*/
  externalDatasetReference?: bigquery_DatasetExternalDatasetReference;

  /*
TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.
*/
  isCaseInsensitive?: boolean;

  /*
If set to `true`, delete all the tables in the
dataset when destroying the resource; otherwise,
destroying the resource will fail if tables are present.
*/
  deleteContentsOnDestroy?: boolean;

  // A user-friendly description of the dataset
  description?: string;

  // A descriptive name for the dataset
  friendlyName?: string;
}
export class Dataset extends DS_Resource {
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
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  public datasetId?: string;

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
  public defaultTableExpirationMs?: number;

  /*
TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.
*/
  public isCaseInsensitive?: boolean;

  /*
The default encryption key for all tables in the dataset. Once this property is set,
all newly-created partitioned tables in the dataset will have encryption key set to
this value, unless table creation request (or query) overrides the key.
Structure is documented below.
*/
  public defaultEncryptionConfiguration?: bigquery_DatasetDefaultEncryptionConfiguration;

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
  public defaultPartitionExpirationMs?: number;

  /*
If set to `true`, delete all the tables in the
dataset when destroying the resource; otherwise,
destroying the resource will fail if tables are present.
*/
  public deleteContentsOnDestroy?: boolean;

  /*
Information about the external metadata storage where the dataset is defined.
Structure is documented below.
*/
  public externalDatasetReference?: bigquery_DatasetExternalDatasetReference;

  // A descriptive name for the dataset
  public friendlyName?: string;

  /*
An array of objects that define dataset access for one or more entities.
Structure is documented below.
*/
  public accesses?: Array<bigquery_DatasetAccess>;

  /*
The time when this dataset was created, in milliseconds since the
epoch.
*/
  public creationTime?: number;

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
  public defaultCollation?: string;

  /*
The date when this dataset or any of its tables was last modified, in
milliseconds since the epoch.
*/
  public lastModifiedTime?: number;

  // Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
  public maxTimeTravelHours?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Specifies the storage billing model for the dataset.
Set this flag value to LOGICAL to use logical bytes for storage billing,
or to PHYSICAL to use physical bytes instead.
LOGICAL is the default if this flag isn't specified.
*/
  public storageBillingModel?: string;

  // A user-friendly description of the dataset
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // A hash of the resource.
  public etag?: string;

  /*
The labels associated with this dataset. You can use these to
organize and group your datasets.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "deleteContentsOnDestroy",
        "If set to `true`, delete all the tables in the\ndataset when destroying the resource; otherwise,\ndestroying the resource will fail if tables are present.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultEncryptionConfiguration",
        "The default encryption key for all tables in the dataset. Once this property is set,\nall newly-created partitioned tables in the dataset will have encryption key set to\nthis value, unless table creation request (or query) overrides the key.\nStructure is documented below.",
        () => bigquery_DatasetDefaultEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "accesses",
        "An array of objects that define dataset access for one or more entities.\nStructure is documented below.",
        () => bigquery_DatasetAccess_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultCollation",
        "Defines the default collation specification of future tables created\nin the dataset. If a table is created in this dataset without table-level\ndefault collation, then the table inherits the dataset default collation,\nwhich is applied to the string fields that do not have explicit collation\nspecified. A change to this field affects only tables created afterwards,\nand does not alter the existing tables.\nThe following values are supported:\n- 'und:ci': undetermined locale, case insensitive.\n- '': empty string. Default to case-sensitive behavior.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultTableExpirationMs",
        "The default lifetime of all tables in the dataset, in milliseconds.\nThe minimum value is 3600000 milliseconds (one hour).\n\nOnce this property is set, all newly-created tables in the dataset\nwill have an `expirationTime` property set to the creation time plus\nthe value in this property, and changing the value will only affect\nnew tables, not existing ones. When the `expirationTime` for a given\ntable is reached, that table will be deleted automatically.\nIf a table's `expirationTime` is modified or removed before the\ntable expires, or if you provide an explicit `expirationTime` when\ncreating a table, that value takes precedence over the default\nexpiration time indicated by this property.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "externalDatasetReference",
        "Information about the external metadata storage where the dataset is defined.\nStructure is documented below.",
        () => bigquery_DatasetExternalDatasetReference_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "datasetId",
        "A unique ID for this dataset, without the project name. The ID\nmust contain only letters (a-z, A-Z), numbers (0-9), or\nunderscores (_). The maximum length is 1,024 characters.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "friendlyName",
        "A descriptive name for the dataset",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultPartitionExpirationMs",
        "The default partition expiration for all partitioned tables in\nthe dataset, in milliseconds.\n\nOnce this property is set, all newly-created partitioned tables in\nthe dataset will have an `expirationMs` property in the `timePartitioning`\nsettings set to this value, and changing the value will only\naffect new tables, not existing ones. The storage in a partition will\nhave an expiration time of its partition time plus this value.\nSetting this property overrides the use of `defaultTableExpirationMs`\nfor partitioned tables: only one of `defaultTableExpirationMs` and\n`defaultPartitionExpirationMs` will be used for any new partitioned\ntable. If you provide an explicit `timePartitioning.expirationMs` when\ncreating or updating a partitioned table, that value takes precedence\nover the default partition expiration time indicated by this property.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The labels associated with this dataset. You can use these to\norganize and group your datasets.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageBillingModel",
        "Specifies the storage billing model for the dataset.\nSet this flag value to LOGICAL to use logical bytes for storage billing,\nor to PHYSICAL to use physical bytes instead.\nLOGICAL is the default if this flag isn't specified.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location where the dataset should reside.\nSee [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).\n\nThere are two types of locations, regional or multi-regional. A regional\nlocation is a specific geographic place, such as Tokyo, and a multi-regional\nlocation is a large geographic area, such as the United States, that\ncontains at least two geographic places.\n\nThe default value is multi-regional location `US`.\nChanging this forces a new resource to be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isCaseInsensitive",
        "TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.\nBy default, this is FALSE, which means the dataset and its table names are\ncase-sensitive. This field does not affect routine references.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A user-friendly description of the dataset",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maxTimeTravelHours",
        "Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).",
        () => [],
        false,
        false,
      ),
    ];
  }
}
