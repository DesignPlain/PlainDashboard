import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  discoveryengine_ChatEngineCommonConfig,
  discoveryengine_ChatEngineCommonConfig_GetTypes,
} from "../types/discoveryengine_ChatEngineCommonConfig";
import {
  discoveryengine_ChatEngineChatEngineMetadata,
  discoveryengine_ChatEngineChatEngineMetadata_GetTypes,
} from "../types/discoveryengine_ChatEngineChatEngineMetadata";
import {
  discoveryengine_ChatEngineChatEngineConfig,
  discoveryengine_ChatEngineChatEngineConfig_GetTypes,
} from "../types/discoveryengine_ChatEngineChatEngineConfig";

export interface ChatEngineArgs {
  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  dataStoreIds?: Array<string>;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  displayName?: string;

  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
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
Configurations for a chat Engine.
Structure is documented below.
*/
  chatEngineConfig?: discoveryengine_ChatEngineChatEngineConfig;

  // The collection ID.
  collectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  commonConfig?: discoveryengine_ChatEngineCommonConfig;

  // The ID to use for chat engine.
  engineId?: string;
}
export class ChatEngine extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The collection ID.
  public collectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public commonConfig?: discoveryengine_ChatEngineCommonConfig;

  // The ID to use for chat engine.
  public engineId?: string;

  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
*/
  public industryVertical?: string;

  /*
The unique full resource name of the chat engine. Values are of the format
`projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
This field must be a UTF-8 encoded string with a length limit of 1024
characters.
*/
  public name?: string;

  // Location.
  public location?: string;

  // Timestamp the Engine was last updated.
  public updateTime?: string;

  /*
Configurations for a chat Engine.
Structure is documented below.
*/
  public chatEngineConfig?: discoveryengine_ChatEngineChatEngineConfig;

  /*
Additional information of the Chat Engine.
Structure is documented below.
*/
  public chatEngineMetadatas?: Array<discoveryengine_ChatEngineChatEngineMetadata>;

  // Timestamp the Engine was created at.
  public createTime?: string;

  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  public dataStoreIds?: Array<string>;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "industryVertical",
        "The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "chatEngineConfig",
        "Configurations for a chat Engine.\nStructure is documented below.",
        discoveryengine_ChatEngineChatEngineConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineId",
        "The ID to use for chat engine.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dataStoreIds",
        "The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "collectionId",
        "The collection ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "commonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
        discoveryengine_ChatEngineCommonConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location.",
        [],
        true,
        true,
      ),
    ];
  }
}
