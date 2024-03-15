import { ChatEngineChatEngineConfigAgentCreationConfig } from "./ChatEngineChatEngineConfigAgentCreationConfig";

export interface ChatEngineChatEngineConfig {
  /*
The configuration to generate the Dialogflow agent that is associated to this Engine.
Structure is documented below.
*/
  AgentCreationConfig?: ChatEngineChatEngineConfigAgentCreationConfig;
}
