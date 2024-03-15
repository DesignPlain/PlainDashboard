import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ChatEngineChatEngineConfig } from "../types/ChatEngineChatEngineConfig";
import { ChatEngineCommonConfig } from "../types/ChatEngineCommonConfig";
import { ChatEngineChatEngineMetadata } from "../types/ChatEngineChatEngineMetadata";

export interface ChatEngineArgs {
  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  DataStoreIds?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configurations for a chat Engine.
Structure is documented below.
*/
  ChatEngineConfig?: ChatEngineChatEngineConfig;

  // The collection ID.
  CollectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  CommonConfig?: ChatEngineCommonConfig;

  // Location.
  Location?: string;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  DisplayName?: string;

  // The ID to use for chat engine.
  EngineId?: string;

  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
*/
  IndustryVertical?: string;
}
export class ChatEngine extends Resource {
  /*
The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.
Default value is `GENERIC`.
Possible values are: `GENERIC`.
*/
  public IndustryVertical?: string;

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
Configurations for a chat Engine.
Structure is documented below.
*/
  public ChatEngineConfig?: ChatEngineChatEngineConfig;

  // The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.
  public DataStoreIds?: Array<string>;

  // The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  public DisplayName?: string;

  // The ID to use for chat engine.
  public EngineId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Timestamp the Engine was last updated.
  public UpdateTime?: string;

  /*
Additional information of the Chat Engine.
Structure is documented below.
*/
  public ChatEngineMetadatas?: Array<ChatEngineChatEngineMetadata>;

  // The collection ID.
  public CollectionId?: string;

  /*
Common config spec that specifies the metadata of the engine.
Structure is documented below.
*/
  public CommonConfig?: ChatEngineCommonConfig;

  // Timestamp the Engine was created at.
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CommonConfig",
        "Common config spec that specifies the metadata of the engine.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Location", "Location."),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DataStoreIds",
        "The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be `SOLUTION_TYPE_CHAT`. Adding or removing data stores will force recreation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ChatEngineConfig",
        "Configurations for a chat Engine.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CollectionId",
        "The collection ID.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EngineId",
        "The ID to use for chat engine.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IndustryVertical",
        "The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine.\nDefault value is `GENERIC`.\nPossible values are: `GENERIC`.",
      ),
    ];
  }
}
