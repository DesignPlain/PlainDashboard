import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datacatalog_EntryGcsFilesetSpec,
  datacatalog_EntryGcsFilesetSpec_GetTypes,
} from '../types/datacatalog_EntryGcsFilesetSpec';
import {
  datacatalog_EntryBigqueryDateShardedSpec,
  datacatalog_EntryBigqueryDateShardedSpec_GetTypes,
} from '../types/datacatalog_EntryBigqueryDateShardedSpec';
import {
  datacatalog_EntryBigqueryTableSpec,
  datacatalog_EntryBigqueryTableSpec_GetTypes,
} from '../types/datacatalog_EntryBigqueryTableSpec';

export interface EntryArgs {
  /*
Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain.
*/
  schema?: string;

  /*
This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  userSpecifiedSystem?: string;

  /*
Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  userSpecifiedType?: string;

  // The name of the entry group this entry is in.
  entryGroup?: string;

  /*
The id of the entry to create.


- - -
*/
  entryId?: string;

  /*
Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.
Structure is documented below.
*/
  gcsFilesetSpec?: datacatalog_EntryGcsFilesetSpec;

  /*
The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.
Possible values are: `FILESET`.
*/
  type?: string;

  // Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  description?: string;

  /*
Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011".
*/
  displayName?: string;

  /*
The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.
*/
  linkedResource?: string;
}
export class Entry extends DS_Resource {
  /*
Specification for a group of BigQuery tables with name pattern [prefix]YYYYMMDD.
Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.
Structure is documented below.
*/
  public bigqueryDateShardedSpecs?: Array<datacatalog_EntryBigqueryDateShardedSpec>;

  /*
Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.
Structure is documented below.
*/
  public gcsFilesetSpec?: datacatalog_EntryGcsFilesetSpec;

  /*
Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
attached to it. See
https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
for what fields this schema can contain.
*/
  public schema?: string;

  /*
Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  public userSpecifiedType?: string;

  /*
Display information such as title and description. A short name to identify the entry,
for example, "Analytics Data - Jan 2011".
*/
  public displayName?: string;

  /*
The type of the entry. Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.
Possible values are: `FILESET`.
*/
  public type?: string;

  /*
The resource this metadata entry refers to.
For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.
*/
  public linkedResource?: string;

  /*
This field indicates the entry's source system that Data Catalog does not integrate with.
userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
*/
  public userSpecifiedSystem?: string;

  /*
The Data Catalog resource name of the entry in URL format.
Example: projects/{project_id}/locations/{location}/entryGroups/{entryGroupId}/entries/{entryId}.
Note that this Entry and its child resources may not actually be stored in the location in this name.
*/
  public name?: string;

  /*
Specification that applies to a BigQuery table. This is only valid on entries of type TABLE.
Structure is documented below.
*/
  public bigqueryTableSpecs?: Array<datacatalog_EntryBigqueryTableSpec>;

  // Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  public description?: string;

  // The name of the entry group this entry is in.
  public entryGroup?: string;

  /*
The id of the entry to create.


- - -
*/
  public entryId?: string;

  // This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.
  public integratedSystem?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'linkedResource',
        'The resource this metadata entry refers to.\nFor Google Cloud Platform resources, linkedResource is the full name of the resource.\nFor example, the linkedResource for a table resource from BigQuery is:\n//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId\nOutput only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,\nthis field is optional and defaults to an empty string.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'entryGroup',
        'The name of the entry group this entry is in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'gcsFilesetSpec',
        'Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.\nStructure is documented below.',
        () => datacatalog_EntryGcsFilesetSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Entry description, which can consist of several sentences or paragraphs that describe entry contents.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Display information such as title and description. A short name to identify the entry,\nfor example, "Analytics Data - Jan 2011".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of the entry. Only used for Entries with types in the EntryType enum.\nCurrently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType.\nPossible values are: `FILESET`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'schema',
        'Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema\nattached to it. See\nhttps://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema\nfor what fields this schema can contain.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userSpecifiedSystem',
        "This field indicates the entry's source system that Data Catalog does not integrate with.\nuserSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,\nand underscores; are case insensitive; must be at least 1 character and at most 64 characters long.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userSpecifiedType',
        'Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.\nWhen creating an entry, users should check the enum values first, if nothing matches the entry\nto be created, then provide a custom value, for example "my_special_type".\nuserSpecifiedType strings must begin with a letter or underscore and can only contain letters,\nnumbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'entryId',
        'The id of the entry to create.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
