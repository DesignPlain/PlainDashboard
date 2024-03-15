import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DataStoreArgs {
  /*
The industry vertical that the data store registers.
Possible values are: `GENERIC`, `MEDIA`.
*/
  IndustryVertical?: string;

  /*
The geographic location where the data store should reside. The value can
only be one of "global", "us" and "eu".
*/
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The solutions that the data store enrolls.
Each value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.
*/
  SolutionTypes?: Array<string>;

  /*
The content config of the data store.
Possible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.
*/
  ContentConfig?: string;

  /*
If true, an advanced data store for site search will be created. If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.
*/
  CreateAdvancedSiteSearch?: boolean;

  /*
The unique id of the data store.


- - -
*/
  DataStoreId?: string;

  /*
The display name of the data store. This field must be a UTF-8 encoded
string with a length limit of 128 characters.
*/
  DisplayName?: string;
}
export class DataStore extends Resource {
  /*
The unique id of the data store.


- - -
*/
  public DataStoreId?: string;

  // The id of the default Schema associated with this data store.
  public DefaultSchemaId?: string;

  /*
The display name of the data store. This field must be a UTF-8 encoded
string with a length limit of 128 characters.
*/
  public DisplayName?: string;

  /*
The industry vertical that the data store registers.
Possible values are: `GENERIC`, `MEDIA`.
*/
  public IndustryVertical?: string;

  /*
The solutions that the data store enrolls.
Each value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.
*/
  public SolutionTypes?: Array<string>;

  /*
The content config of the data store.
Possible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.
*/
  public ContentConfig?: string;

  /*
If true, an advanced data store for site search will be created. If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.
*/
  public CreateAdvancedSiteSearch?: boolean;

  // Timestamp when the DataStore was created.
  public CreateTime?: string;

  /*
The geographic location where the data store should reside. The value can
only be one of "global", "us" and "eu".
*/
  public Location?: string;

  /*
The unique full resource name of the data store. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IndustryVertical",
        "The industry vertical that the data store registers.\nPossible values are: `GENERIC`, `MEDIA`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        'The geographic location where the data store should reside. The value can\nonly be one of "global", "us" and "eu".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SolutionTypes",
        "The solutions that the data store enrolls.\nEach value may be one of: `SOLUTION_TYPE_RECOMMENDATION`, `SOLUTION_TYPE_SEARCH`, `SOLUTION_TYPE_CHAT`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentConfig",
        "The content config of the data store.\nPossible values are: `NO_CONTENT`, `CONTENT_REQUIRED`, `PUBLIC_WEBSITE`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "CreateAdvancedSiteSearch",
        "If true, an advanced data store for site search will be created. If the\ndata store is not configured as site search (GENERIC vertical and\nPUBLIC_WEBSITE contentConfig), this flag will be ignored.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataStoreId",
        "The unique id of the data store.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the data store. This field must be a UTF-8 encoded\nstring with a length limit of 128 characters.",
      ),
    ];
  }
}
