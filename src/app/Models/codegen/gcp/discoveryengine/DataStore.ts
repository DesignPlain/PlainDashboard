import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DataStoreArgs {
  /*
The solutions that the data store enrolls.
Each value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.
*/
  solutionTypes?: Array<string>;

  /*
The content config of the data store.
Possible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.
*/
  contentConfig?: string;

  /*
If true, an advanced data store for site search will be created. If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.
*/
  createAdvancedSiteSearch?: boolean;

  /*
The unique id of the data store.


- - -
*/
  dataStoreId?: string;

  /*
The display name of the data store. This field must be a UTF-8 encoded
string with a length limit of 128 characters.
*/
  displayName?: string;

  /*
The industry vertical that the data store registers.
Possible values are: `GENERIC`, `MEDIA`.
*/
  industryVertical?: string;

  /*
The geographic location where the data store should reside. The value can
only be one of "global", "us" and "eu".
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class DataStore extends DS_Resource {
  /*
The content config of the data store.
Possible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.
*/
  public contentConfig?: string;

  /*
If true, an advanced data store for site search will be created. If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.
*/
  public createAdvancedSiteSearch?: boolean;

  /*
The unique full resource name of the data store. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public name?: string;

  /*
The solutions that the data store enrolls.
Each value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.
*/
  public solutionTypes?: Array<string>;

  // Timestamp when the DataStore was created.
  public createTime?: string;

  /*
The unique id of the data store.


- - -
*/
  public dataStoreId?: string;

  // The id of the default Schema associated with this data store.
  public defaultSchemaId?: string;

  /*
The display name of the data store. This field must be a UTF-8 encoded
string with a length limit of 128 characters.
*/
  public displayName?: string;

  /*
The industry vertical that the data store registers.
Possible values are: `GENERIC`, `MEDIA`.
*/
  public industryVertical?: string;

  /*
The geographic location where the data store should reside. The value can
only be one of "global", "us" and "eu".
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dataStoreId",
        "The unique id of the data store.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name of the data store. This field must be a UTF-8 encoded\nstring with a length limit of 128 characters.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "industryVertical",
        "The industry vertical that the data store registers.\nPossible values are: `GENERIC`, `MEDIA`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        'The geographic location where the data store should reside. The value can\nonly be one of "global", "us" and "eu".',
        () => [],
        true,
        true,
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
        InputType.Array,
        "solutionTypes",
        "The solutions that the data store enrolls.\nEach value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentConfig",
        "The content config of the data store.\nPossible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "createAdvancedSiteSearch",
        "If true, an advanced data store for site search will be created. If the\ndata store is not configured as site search (GENERIC vertical and\nPUBLIC_WEBSITE contentConfig), this flag will be ignored.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
