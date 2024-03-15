import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SearchEngineCommonConfig } from "../types/SearchEngineCommonConfig";
import { SearchEngineSearchEngineConfig } from "../types/SearchEngineSearchEngineConfig";

export interface SearchEngineArgs {
  // The collection ID.
  CollectionId?: string;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  DataStoreIds?: Array<string>;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  DisplayName?: string;

  // Unique ID to use for Search Engine App.
  EngineId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  CommonConfig?: SearchEngineCommonConfig;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  IndustryVertical?: string;

  // Location.
  Location?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  SearchEngineConfig?: SearchEngineSearchEngineConfig;
}
export class SearchEngine extends Resource {
  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public CommonConfig?: SearchEngineCommonConfig;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  public IndustryVertical?: string;

  // Location.
  public Location?: string;

  /*
The unique full resource name of the search engine. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  public SearchEngineConfig?: SearchEngineSearchEngineConfig;

  // Timestamp the Engine was last updated.
  public UpdateTime?: string;

  // The collection ID.
  public CollectionId?: string;

  // Timestamp the Engine was created at.
  public CreateTime?: string;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  public DataStoreIds?: Array<string>;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public DisplayName?: string;

  // Unique ID to use for Search Engine App.
  public EngineId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "DataStoreIds",
        "The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EngineId",
        "Unique ID to use for Search Engine App.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IndustryVertical",
        "The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`, `MEDIA`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CollectionId",
        "The collection ID.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CommonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Location", "Location."),
      new DynamicUIProps(
        InputType.String,
        "SearchEngineConfig",
        "Configurations for a Search Engine.\nStructure is documented below.",
      ),
    ];
  }
}
