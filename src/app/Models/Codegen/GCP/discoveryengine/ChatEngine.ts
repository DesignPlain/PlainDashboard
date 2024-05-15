import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Discoveryengine_ChatEngineCommonConfig,
  Discoveryengine_ChatEngineCommonConfig_GetTypes,
} from "../types/Discoveryengine_ChatEngineCommonConfig";
import {
  Discoveryengine_ChatEngineChatEngineConfig,
  Discoveryengine_ChatEngineChatEngineConfig_GetTypes,
} from "../types/Discoveryengine_ChatEngineChatEngineConfig";
import {
  Discoveryengine_ChatEngineChatEngineMetadata,
  Discoveryengine_ChatEngineChatEngineMetadata_GetTypes,
} from "../types/Discoveryengine_ChatEngineChatEngineMetadata";

export interface ChatEngineArgs {
  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  CommonConfig?: Discoveryengine_ChatEngineCommonConfig;

  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
*/
  IndustryVertical?: string;

  // Location.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configurations for a chat Engine.
Structure is documented below.
*/
  ChatEngineConfig?: Discoveryengine_ChatEngineChatEngineConfig;

  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  DataStoreIds?: Array<string>;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  DisplayName?: string;

  // The ID to use for chat engine.
  EngineId?: string;

  // The collection ID.
  CollectionId?: string;
}
export class ChatEngine extends Resource {
  // The ID to use for chat engine.
  public EngineId?: string;

  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
*/
  public IndustryVertical?: string;

  // Timestamp the Engine was last updated.
  public UpdateTime?: string;

  /*
Configurations for a chat Engine.
Structure is documented below.
*/
  public ChatEngineConfig?: Discoveryengine_ChatEngineChatEngineConfig;

  /*
Additional information of the Chat Engine.
Structure is documented below.
*/
  public ChatEngineMetadatas?: Array<Discoveryengine_ChatEngineChatEngineMetadata>;

  // Timestamp the Engine was created at.
  public CreateTime?: string;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public DisplayName?: string;

  // Location.
  public Location?: string;

  /*
The unique full resource name of the chat engine. Values are of the format
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

  // The collection ID.
  public CollectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public CommonConfig?: Discoveryengine_ChatEngineCommonConfig;

  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  public DataStoreIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "EngineId",
        "The ID to use for chat engine.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CollectionId",
        "The collection ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CommonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
        Discoveryengine_ChatEngineCommonConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IndustryVertical",
        "The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ChatEngineConfig",
        "Configurations for a chat Engine.\nStructure is documented below.",
        Discoveryengine_ChatEngineChatEngineConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DataStoreIds",
        "The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
        [],
        true,
        false,
      ),
    ];
  }
}
