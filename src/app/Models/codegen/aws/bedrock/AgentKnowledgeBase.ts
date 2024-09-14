import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration,
  bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration_GetTypes,
} from "../types/bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration";
import {
  bedrock_AgentKnowledgeBaseStorageConfiguration,
  bedrock_AgentKnowledgeBaseStorageConfiguration_GetTypes,
} from "../types/bedrock_AgentKnowledgeBaseStorageConfiguration";
import {
  bedrock_AgentKnowledgeBaseTimeouts,
  bedrock_AgentKnowledgeBaseTimeouts_GetTypes,
} from "../types/bedrock_AgentKnowledgeBaseTimeouts";

export interface AgentKnowledgeBaseArgs {
  // Details about the embeddings configuration of the knowledge base. See `knowledge_base_configuration` block for details.
  knowledgeBaseConfiguration?: bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration;

  // Name of the knowledge base.
  name?: string;

  // ARN of the IAM role with permissions to invoke API operations on the knowledge base.
  roleArn?: string;

  /*
Details about the storage configuration of the knowledge base. See `storage_configuration` block for details.

The following arguments are optional:
*/
  storageConfiguration?: bedrock_AgentKnowledgeBaseStorageConfiguration;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: bedrock_AgentKnowledgeBaseTimeouts;

  // Description of the knowledge base.
  description?: string;
}
export class AgentKnowledgeBase extends DS_Resource {
  //
  public failureReasons?: Array<string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Time at which the knowledge base was last updated.
  public updatedAt?: string;

  // ARN of the knowledge base.
  public arn?: string;

  // Time at which the knowledge base was created.
  public createdAt?: string;

  // Description of the knowledge base.
  public description?: string;

  /*
Details about the storage configuration of the knowledge base. See `storage_configuration` block for details.

The following arguments are optional:
*/
  public storageConfiguration?: bedrock_AgentKnowledgeBaseStorageConfiguration;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: bedrock_AgentKnowledgeBaseTimeouts;

  // Details about the embeddings configuration of the knowledge base. See `knowledge_base_configuration` block for details.
  public knowledgeBaseConfiguration?: bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration;

  // Name of the knowledge base.
  public name?: string;

  // ARN of the IAM role with permissions to invoke API operations on the knowledge base.
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => bedrock_AgentKnowledgeBaseTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the knowledge base.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "knowledgeBaseConfiguration",
        "Details about the embeddings configuration of the knowledge base. See `knowledge_base_configuration` block for details.",
        () => bedrock_AgentKnowledgeBaseKnowledgeBaseConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the knowledge base.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of the IAM role with permissions to invoke API operations on the knowledge base.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storageConfiguration",
        "Details about the storage configuration of the knowledge base. See `storage_configuration` block for details.\n\nThe following arguments are optional:",
        () => bedrock_AgentKnowledgeBaseStorageConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
