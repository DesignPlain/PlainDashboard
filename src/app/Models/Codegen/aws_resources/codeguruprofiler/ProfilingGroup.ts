import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codeguruprofiler_ProfilingGroupAgentOrchestrationConfig,
  codeguruprofiler_ProfilingGroupAgentOrchestrationConfig_GetTypes,
} from "../types/codeguruprofiler_ProfilingGroupAgentOrchestrationConfig";

export interface ProfilingGroupArgs {
  // Specifies whether profiling is enabled or disabled for the created profiling. See Agent Orchestration Config for more details.
  agentOrchestrationConfig?: codeguruprofiler_ProfilingGroupAgentOrchestrationConfig;

  // Compute platform of the profiling group.
  computePlatform?: string;

  /*
Name of the profiling group.

The following arguments are optional:
*/
  name?: string;

  // A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ProfilingGroup extends Resource {
  // Specifies whether profiling is enabled or disabled for the created profiling. See Agent Orchestration Config for more details.
  public agentOrchestrationConfig?: codeguruprofiler_ProfilingGroupAgentOrchestrationConfig;

  // ARN of the profiling group.
  public arn?: string;

  // Compute platform of the profiling group.
  public computePlatform?: string;

  /*
Name of the profiling group.

The following arguments are optional:
*/
  public name?: string;

  // A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "agentOrchestrationConfig",
        "Specifies whether profiling is enabled or disabled for the created profiling. See Agent Orchestration Config for more details.",
        codeguruprofiler_ProfilingGroupAgentOrchestrationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "computePlatform",
        "Compute platform of the profiling group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the profiling group.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
