import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_EntryBigqueryTableSpec,
  Datacatalog_EntryBigqueryTableSpec_GetTypes,
} from "../types/Datacatalog_EntryBigqueryTableSpec";
import {
  Datacatalog_EntryBigqueryDateShardedSpec,
  Datacatalog_EntryBigqueryDateShardedSpec_GetTypes,
} from "../types/Datacatalog_EntryBigqueryDateShardedSpec";
import {
  Datacatalog_EntryGcsFilesetSpec,
  Datacatalog_EntryGcsFilesetSpec_GetTypes,
} from "../types/Datacatalog_EntryGcsFilesetSpec";

export interface EntryArgs {
  /*
The id of the entry to create.


- - -
*/
  EntryId?: string;

  /*
Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.
Structure is documented below.
*/
  GcsFilesetSpec?: Datacatalog_EntryGcsFilesetSpec;

  /*
The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.
*/
  LinkedResource?: string;

  /*
Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011".
*/
  DisplayName?: string;

  // The name of the entry group this entry is in.
  EntryGroup?: string;

  /*
Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain.
*/
  Schema?: string;

  /*
The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.
Possible values are: `FILESET`.
*/
  Type?: string;

  /*
This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  UserSpecifiedSystem?: string;

  /*
Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  UserSpecifiedType?: string;

  // Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  Description?: string;
}
export class Entry extends Resource {
  // Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  public Description?: string;

  /*
The id of the entry to create.


- - -
*/
  public EntryId?: string;

  // This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.
  public IntegratedSystem?: string;

  /*
Specification that applies to a BigQuery table. This is only valid on entries of type TABLE.
Structure is documented below.
*/
  public BigqueryTableSpecs?: Array<Datacatalog_EntryBigqueryTableSpec>;

  /*
The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.
*/
  public LinkedResource?: string;

  /*
Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  public UserSpecifiedType?: string;

  // The name of the entry group this entry is in.
  public EntryGroup?: string;

  /*
Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.
Structure is documented below.
*/
  public GcsFilesetSpec?: Datacatalog_EntryGcsFilesetSpec;

  /*
Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain.
*/
  public Schema?: string;

  /*
The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.
Possible values are: `FILESET`.
*/
  public Type?: string;

  /*
Specification for a group of BigQuery tables with name pattern [prefix]YYYYMMDD.
Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.
Structure is documented below.
*/
  public BigqueryDateShardedSpecs?: Array<Datacatalog_EntryBigqueryDateShardedSpec>;

  /*
The Data Catalog resource name of the entry in URL format.
Example: projects/{project_id}/locations/{location}/entryGroups/{entryGroupId}/entries/{entryId}.
Note that this Entry and its child resources may not actually be stored in the location in this name.
*/
  public Name?: string;

  /*
This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  public UserSpecifiedSystem?: string;

  /*
Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011".
*/
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "UserSpecifiedSystem",
        "This field indicates the entry's source system that Data Catalog does not integrate with.\nuserSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,\nand underscores; are case insensitive; must be at least 1 character and at most 64 characters long.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EntryId",
        "The id of the entry to create.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GcsFilesetSpec",
        "Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.\nStructure is documented below.",
        Datacatalog_EntryGcsFilesetSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LinkedResource",
        "The resource this metadata entry refers to.\nFor Google Cloud Platform resources, linkedResource is the full name of the resource.\nFor example, the linkedResource for a table resource from BigQuery is:\n//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId\nOutput only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,\nthis field is optional and defaults to an empty string.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        'Display information such as title and description. A short name to identify the entry,\nfor example, "Analytics Data - Jan 2011".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Schema",
        "Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema\nattached to it. See\nhttps://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema\nfor what fields this schema can contain.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of the entry. Only used for Entries with types in the EntryType enum.\nCurrently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.\nPossible values are: `FILESET`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EntryGroup",
        "The name of the entry group this entry is in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "UserSpecifiedType",
        'Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.\nWhen creating an entry, users should check the enum values first, if nothing matches the entry\nto be created, then provide a custom value, for example "my_special_type".\nuserSpecifiedType strings must begin with a letter or underscore and can only contain letters,\nnumbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Entry description, which can consist of several sentences or paragraphs that describe entry contents.",
        [],
        false,
        false,
      ),
    ];
  }
}
