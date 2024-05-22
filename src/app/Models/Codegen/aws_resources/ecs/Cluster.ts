import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ClusterServiceConnectDefaults,
  ecs_ClusterServiceConnectDefaults_GetTypes,
} from "../types/ecs_ClusterServiceConnectDefaults";
import {
  ecs_ClusterSetting,
  ecs_ClusterSetting_GetTypes,
} from "../types/ecs_ClusterSetting";
import {
  ecs_ClusterConfiguration,
  ecs_ClusterConfiguration_GetTypes,
} from "../types/ecs_ClusterConfiguration";

export interface ClusterArgs {
  // Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Detailed below.
  settings?: Array<ecs_ClusterSetting>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The execute command configuration for the cluster. Detailed below.
  configuration?: ecs_ClusterConfiguration;

  // Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)
  name?: string;

  // Configures a default Service Connect namespace. Detailed below.
  serviceConnectDefaults?: ecs_ClusterServiceConnectDefaults;
}
export class Cluster extends Resource {
  // ARN that identifies the cluster.
  public arn?: string;

  // The execute command configuration for the cluster. Detailed below.
  public configuration?: ecs_ClusterConfiguration;

  // Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)
  public name?: string;

  // Configures a default Service Connect namespace. Detailed below.
  public serviceConnectDefaults?: ecs_ClusterServiceConnectDefaults;

  // Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Detailed below.
  public settings?: Array<ecs_ClusterSetting>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "settings",
        "Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Detailed below.",
        ecs_ClusterSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "The execute command configuration for the cluster. Detailed below.",
        ecs_ClusterConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceConnectDefaults",
        "Configures a default Service Connect namespace. Detailed below.",
        ecs_ClusterServiceConnectDefaults_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
