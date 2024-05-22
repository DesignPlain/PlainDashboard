import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ApplicationArgs {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.
  computePlatform?: string;

  // The name of the application.
  name?: string;
}
export class Application extends Resource {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The application ID.
  public applicationId?: string;

  // The ARN of the CodeDeploy application.
  public arn?: string;

  // The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.
  public computePlatform?: string;

  // The name for a connection to a GitHub account.
  public githubAccountName?: string;

  // Whether the user has authenticated with GitHub for the specified application.
  public linkedToGithub?: boolean;

  // The name of the application.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "computePlatform",
        "The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the application.",
        [],
        false,
        false,
      ),
    ];
  }
}
