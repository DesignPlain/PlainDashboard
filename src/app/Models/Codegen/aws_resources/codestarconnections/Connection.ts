import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConnectionArgs {
  // The name of the external provider where your third-party code repository is configured. Valid values are `Bitbucket`, `GitHub`, `GitHubEnterpriseServer`, `GitLab` or `GitLabSelfManaged`. Changing `provider_type` will create a new resource. Conflicts with `host_arn`
  providerType?: string;

  // Map of key-value resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the host associated with the connection. Conflicts with `provider_type`
  hostArn?: string;

  // The name of the connection to be created. The name must be unique in the calling AWS account. Changing `name` will create a new resource.
  name?: string;
}
export class Connection extends Resource {
  // The name of the connection to be created. The name must be unique in the calling AWS account. Changing `name` will create a new resource.
  public name?: string;

  // The name of the external provider where your third-party code repository is configured. Valid values are `Bitbucket`, `GitHub`, `GitHubEnterpriseServer`, `GitLab` or `GitLabSelfManaged`. Changing `provider_type` will create a new resource. Conflicts with `host_arn`
  public providerType?: string;

  // Map of key-value resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The codestar connection ARN.
  public arn?: string;

  // The codestar connection status. Possible values are `PENDING`, `AVAILABLE` and `ERROR`.
  public connectionStatus?: string;

  // The Amazon Resource Name (ARN) of the host associated with the connection. Conflicts with `provider_type`
  public hostArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "hostArn",
        "The Amazon Resource Name (ARN) of the host associated with the connection. Conflicts with `provider_type`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the connection to be created. The name must be unique in the calling AWS account. Changing `name` will create a new resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "providerType",
        "The name of the external provider where your third-party code repository is configured. Valid values are `Bitbucket`, `GitHub`, `GitHubEnterpriseServer`, `GitLab` or `GitLabSelfManaged`. Changing `provider_type` will create a new resource. Conflicts with `host_arn`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of key-value resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
