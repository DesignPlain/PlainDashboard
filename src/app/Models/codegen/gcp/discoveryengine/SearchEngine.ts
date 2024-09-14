import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  discoveryengine_SearchEngineSearchEngineConfig,
  discoveryengine_SearchEngineSearchEngineConfig_GetTypes,
} from "../types/discoveryengine_SearchEngineSearchEngineConfig";
import {
  discoveryengine_SearchEngineCommonConfig,
  discoveryengine_SearchEngineCommonConfig_GetTypes,
} from "../types/discoveryengine_SearchEngineCommonConfig";

export interface SearchEngineArgs {
  // The collection ID.
  collectionId?: string;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  industryVertical?: string;

  // Location.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  searchEngineConfig?: discoveryengine_SearchEngineSearchEngineConfig;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  commonConfig?: discoveryengine_SearchEngineCommonConfig;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  dataStoreIds?: Array<string>;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  displayName?: string;

  // Unique ID to use for Search Engine App.
  engineId?: string;
}
export class SearchEngine extends DS_Resource {
  // Timestamp the Engine was last updated.
  public updateTime?: string;

  // The collection ID.
  public collectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public commonConfig?: discoveryengine_SearchEngineCommonConfig;

  // The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  public dataStoreIds?: Array<string>;

  // Unique ID to use for Search Engine App.
  public engineId?: string;

  /*
The unique full resource name of the search engine. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Timestamp the Engine was created at.
  public createTime?: string;

  // Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public displayName?: string;

  /*
The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`, `MEDIA`.
*/
  public industryVertical?: string;

  // Location.
  public location?: string;

  /*
Configurations for a Search Engine.
Structure is documented below.
*/
  public searchEngineConfig?: discoveryengine_SearchEngineSearchEngineConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engineId",
        "Unique ID to use for Search Engine App.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "collectionId",
        "The collection ID.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "searchEngineConfig",
        "Configurations for a Search Engine.\nStructure is documented below.",
        () => discoveryengine_SearchEngineSearchEngineConfig_GetTypes(),
        true,
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
        InputType.Object,
        "commonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
        () => discoveryengine_SearchEngineCommonConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dataStoreIds",
        "The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "industryVertical",
        "The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`, `MEDIA`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
