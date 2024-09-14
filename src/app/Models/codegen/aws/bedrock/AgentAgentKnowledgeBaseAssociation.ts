import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentAgentKnowledgeBaseAssociationTimeouts,
  bedrock_AgentAgentKnowledgeBaseAssociationTimeouts_GetTypes,
} from "../types/bedrock_AgentAgentKnowledgeBaseAssociationTimeouts";

export interface AgentAgentKnowledgeBaseAssociationArgs {
  /*
Whether to use the knowledge base when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.

The following arguments are optional:
*/
  knowledgeBaseState?: string;

  //
  timeouts?: bedrock_AgentAgentKnowledgeBaseAssociationTimeouts;

  // Unique identifier of the agent with which you want to associate the knowledge base.
  agentId?: string;

  // Version of the agent with which you want to associate the knowledge base. Valid values: `DRAFT`.
  agentVersion?: string;

  // Description of what the agent should use the knowledge base for.
  description?: string;

  // Unique identifier of the knowledge base to associate with the agent.
  knowledgeBaseId?: string;
}
export class AgentAgentKnowledgeBaseAssociation extends DS_Resource {
  // Unique identifier of the agent with which you want to associate the knowledge base.
  public agentId?: string;

  // Version of the agent with which you want to associate the knowledge base. Valid values: `DRAFT`.
  public agentVersion?: string;

  // Description of what the agent should use the knowledge base for.
  public description?: string;

  // Unique identifier of the knowledge base to associate with the agent.
  public knowledgeBaseId?: string;

  /*
Whether to use the knowledge base when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.

The following arguments are optional:
*/
  public knowledgeBaseState?: string;

  //
  public timeouts?: bedrock_AgentAgentKnowledgeBaseAssociationTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "agentVersion",
        "Version of the agent with which you want to associate the knowledge base. Valid values: `DRAFT`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of what the agent should use the knowledge base for.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "knowledgeBaseId",
        "Unique identifier of the knowledge base to associate with the agent.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "knowledgeBaseState",
        "Whether to use the knowledge base when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Valid values: `ENABLED`, `DISABLED`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => bedrock_AgentAgentKnowledgeBaseAssociationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "agentId",
        "Unique identifier of the agent with which you want to associate the knowledge base.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
