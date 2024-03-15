import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CxEnvironmentVersionConfig } from "../types/CxEnvironmentVersionConfig";

export interface CxEnvironmentArgs {
  // The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  Description?: string;

  // The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  DisplayName?: string;

  /*
The Agent to create an Environment for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  /*
A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.
Structure is documented below.
*/
  VersionConfigs?: Array<CxEnvironmentVersionConfig>;
}
export class CxEnvironment extends Resource {
  /*
A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.
Structure is documented below.
*/
  public VersionConfigs?: Array<CxEnvironmentVersionConfig>;

  // The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  public Description?: string;

  // The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  public DisplayName?: string;

  // The name of the environment.
  public Name?: string;

  /*
The Agent to create an Environment for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  // Update time of this environment. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the environment (unique in an agent). Limit of 64 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The Agent to create an Environment for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "VersionConfigs",
        "A list of configurations for flow versions. You should include version configs for all flows that are reachable from [Start Flow][Agent.start_flow] in the agent. Otherwise, an error will be returned.\nStructure is documented below.",
      ),
    ];
  }
}
