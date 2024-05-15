import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Discoveryengine_SearchEngineCommonConfig,
  Discoveryengine_SearchEngineCommonConfig_GetTypes,
} from "../types/Discoveryengine_SearchEngineCommonConfig";
import {
  Discoveryengine_SearchEngineSearchEngineConfig,
  Discoveryengine_SearchEngineSearchEngineConfig_GetTypes,
} from "../types/Discoveryengine_SearchEngineSearchEngineConfig";

export interface SearchEngineArgs {
  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  CommonConfig?: Discoveryengine_SearchEngineCommonConfig;

  // Unique ID to use for Search Engine App.
  EngineId?: string;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  IndustryVertical?: string;

  // Location.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The collection ID.
  CollectionId?: string;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  DataStoreIds?: Array<string>;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  DisplayName?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  SearchEngineConfig?: Discoveryengine_SearchEngineSearchEngineConfig;
}
export class SearchEngine extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Timestamp the Engine was last updated.
  public UpdateTime?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public CommonConfig?: Discoveryengine_SearchEngineCommonConfig;

  // Unique ID to use for Search Engine App.
  public EngineId?: string;

  // Location.
  public Location?: string;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public DisplayName?: string;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  public IndustryVertical?: string;

  /*
The unique full resource name of the search engine. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public Name?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  public SearchEngineConfig?: Discoveryengine_SearchEngineSearchEngineConfig;

  // The collection ID.
  public CollectionId?: string;

  // Timestamp the Engine was created at.
  public CreateTime?: string;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  public DataStoreIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CollectionId",
        "The collection ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DataStoreIds",
        "The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CommonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
        Discoveryengine_SearchEngineCommonConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EngineId",
        "Unique ID to use for Search Engine App.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IndustryVertical",
        "The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`, `MEDIA`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location.",
        [],
        true,
        true,
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
        "DisplayName",
        "Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SearchEngineConfig",
        "Configurations for a Search Engine.\nStructure is documented below.",
        Discoveryengine_SearchEngineSearchEngineConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
