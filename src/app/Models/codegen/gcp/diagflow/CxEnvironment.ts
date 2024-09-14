import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxEnvironmentVersionConfig,
  diagflow_CxEnvironmentVersionConfig_GetTypes,
} from "../types/diagflow_CxEnvironmentVersionConfig";

export interface CxEnvironmentArgs {
  /*
A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.
Structure is documented below.
*/
  versionConfigs?: Array<diagflow_CxEnvironmentVersionConfig>;

  // The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  description?: string;

  // The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  displayName?: string;

  /*
The Agent to create an Environment for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  parent?: string;
}
export class CxEnvironment extends DS_Resource {
  // The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  public description?: string;

  // The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  public displayName?: string;

  // The name of the environment.
  public name?: string;

  /*
The Agent to create an Environment for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public parent?: string;

  // Update time of this environment. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  public updateTime?: string;

  /*
A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.
Structure is documented below.
*/
  public versionConfigs?: Array<diagflow_CxEnvironmentVersionConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "versionConfigs",
        "A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.\nStructure is documented below.",
        () => diagflow_CxEnvironmentVersionConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the environment (unique in an agent). Limit of 64 characters.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The Agent to create an Environment for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
