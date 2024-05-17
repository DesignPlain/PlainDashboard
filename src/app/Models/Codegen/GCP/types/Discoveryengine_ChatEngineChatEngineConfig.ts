import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig,
  Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes,
} from "./Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig";

export interface Discoveryengine_ChatEngineChatEngineConfig {
  /*
The configuration to generate the Dialogflow agent that is associated to this Engine.
Structure is documented below.
*/
  AgentCreationConfig?: Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig;
}

export function Discoveryengine_ChatEngineChatEngineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AgentCreationConfig",
      "The configuration to generate the Dialogflow agent that is associated to this Engine.\nStructure is documented below.",
      Discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
