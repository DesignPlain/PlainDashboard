import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_ClusterConfiguration,
  ecs_ClusterConfiguration_GetTypes,
} from "../types/ecs_ClusterConfiguration";
import {
  ecs_ClusterServiceConnectDefaults,
  ecs_ClusterServiceConnectDefaults_GetTypes,
} from "../types/ecs_ClusterServiceConnectDefaults";
import {
  ecs_ClusterSetting,
  ecs_ClusterSetting_GetTypes,
} from "../types/ecs_ClusterSetting";

export interface ClusterArgs {
  // Execute command configuration for the cluster. See `configuration` Block for details.
  configuration?: ecs_ClusterConfiguration;

  /*
Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)

The following arguments are optional:
*/
  name?: string;

  // Default Service Connect namespace. See `service_connect_defaults` Block for details.
  serviceConnectDefaults?: ecs_ClusterServiceConnectDefaults;

  // Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. See `setting` Block for details.
  settings?: Array<ecs_ClusterSetting>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Cluster extends DS_Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN that identifies the cluster.
  public arn?: string;

  // Execute command configuration for the cluster. See `configuration` Block for details.
  public configuration?: ecs_ClusterConfiguration;

  /*
Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)

The following arguments are optional:
*/
  public name?: string;

  // Default Service Connect namespace. See `service_connect_defaults` Block for details.
  public serviceConnectDefaults?: ecs_ClusterServiceConnectDefaults;

  // Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. See `setting` Block for details.
  public settings?: Array<ecs_ClusterSetting>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the cluster (up to 255 letters, numbers, hyphens, and underscores)\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceConnectDefaults",
        "Default Service Connect namespace. See `service_connect_defaults` Block for details.",
        () => ecs_ClusterServiceConnectDefaults_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "settings",
        "Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. See `setting` Block for details.",
        () => ecs_ClusterSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "Execute command configuration for the cluster. See `configuration` Block for details.",
        () => ecs_ClusterConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
