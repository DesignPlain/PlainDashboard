import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ecs_TaskSetLoadBalancer,
  ecs_TaskSetLoadBalancer_GetTypes,
} from "../types/ecs_TaskSetLoadBalancer";
import {
  ecs_TaskSetNetworkConfiguration,
  ecs_TaskSetNetworkConfiguration_GetTypes,
} from "../types/ecs_TaskSetNetworkConfiguration";
import {
  ecs_TaskSetScale,
  ecs_TaskSetScale_GetTypes,
} from "../types/ecs_TaskSetScale";
import {
  ecs_TaskSetServiceRegistries,
  ecs_TaskSetServiceRegistries_GetTypes,
} from "../types/ecs_TaskSetServiceRegistries";
import {
  ecs_TaskSetCapacityProviderStrategy,
  ecs_TaskSetCapacityProviderStrategy_GetTypes,
} from "../types/ecs_TaskSetCapacityProviderStrategy";

export interface TaskSetArgs {
  // Details on load balancers that are used with a task set. Detailed below.
  loadBalancers?: Array<ecs_TaskSetLoadBalancer>;

  // The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. Detailed below.
  networkConfiguration?: ecs_TaskSetNetworkConfiguration;

  // The short name or ARN of the ECS service.
  service?: string;

  // The launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`.
  launchType?: string;

  // Whether to allow deleting the task set without waiting for scaling down to 0. You can force a task set to delete even if it's in the process of scaling a resource. Normally, the provider drains all the tasks before deleting the task set. This bypasses that behavior and potentially leaves resources dangling.
  forceDelete?: boolean;

  // The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  platformVersion?: string;

  // A floating-point percentage of the desired number of tasks to place and keep running in the task set. Detailed below.
  scale?: ecs_TaskSetScale;

  // The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. Detailed below.
  serviceRegistries?: ecs_TaskSetServiceRegistries;

  // The short name or ARN of the cluster that hosts the service to create the task set in.
  cluster?: string;

  // A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.
  tags?: Map<string, string>;

  // Whether the provider should wait until the task set has reached `STEADY_STATE`.
  waitUntilStable?: boolean;

  // Wait timeout for task set to reach `STEADY_STATE`. Valid time units include `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. Default `10m`.
  waitUntilStableTimeout?: string;

  // The external ID associated with the task set.
  externalId?: string;

  /*
The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.

The following arguments are optional:
*/
  taskDefinition?: string;

  // The capacity provider strategy to use for the service. Can be one or more.  Defined below.
  capacityProviderStrategies?: Array<ecs_TaskSetCapacityProviderStrategy>;
}
export class TaskSet extends Resource {
  // The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  public platformVersion?: string;

  // The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. Detailed below.
  public serviceRegistries?: ecs_TaskSetServiceRegistries;

  // The stability status. This indicates whether the task set has reached a steady state.
  public stabilityStatus?: string;

  // The short name or ARN of the cluster that hosts the service to create the task set in.
  public cluster?: string;

  // The external ID associated with the task set.
  public externalId?: string;

  // A floating-point percentage of the desired number of tasks to place and keep running in the task set. Detailed below.
  public scale?: ecs_TaskSetScale;

  // The short name or ARN of the ECS service.
  public service?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Details on load balancers that are used with a task set. Detailed below.
  public loadBalancers?: Array<ecs_TaskSetLoadBalancer>;

  // Whether the provider should wait until the task set has reached `STEADY_STATE`.
  public waitUntilStable?: boolean;

  /*
The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.

The following arguments are optional:
*/
  public taskDefinition?: string;

  // The Amazon Resource Name (ARN) that identifies the task set.
  public arn?: string;

  // The capacity provider strategy to use for the service. Can be one or more.  Defined below.
  public capacityProviderStrategies?: Array<ecs_TaskSetCapacityProviderStrategy>;

  // Whether to allow deleting the task set without waiting for scaling down to 0. You can force a task set to delete even if it's in the process of scaling a resource. Normally, the provider drains all the tasks before deleting the task set. This bypasses that behavior and potentially leaves resources dangling.
  public forceDelete?: boolean;

  // The launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`.
  public launchType?: string;

  // The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. Detailed below.
  public networkConfiguration?: ecs_TaskSetNetworkConfiguration;

  // The status of the task set.
  public status?: string;

  // A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.
  public tags?: Map<string, string>;

  // The ID of the task set.
  public taskSetId?: string;

  // Wait timeout for task set to reach `STEADY_STATE`. Valid time units include `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. Default `10m`.
  public waitUntilStableTimeout?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "scale",
        "A floating-point percentage of the desired number of tasks to place and keep running in the task set. Detailed below.",
        ecs_TaskSetScale_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "waitUntilStableTimeout",
        "Wait timeout for task set to reach `STEADY_STATE`. Valid time units include `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. Default `10m`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taskDefinition",
        "The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "capacityProviderStrategies",
        "The capacity provider strategy to use for the service. Can be one or more.  Defined below.",
        ecs_TaskSetCapacityProviderStrategy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "launchType",
        "The launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitUntilStable",
        "Whether the provider should wait until the task set has reached `STEADY_STATE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfiguration",
        "The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. Detailed below.",
        ecs_TaskSetNetworkConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The short name or ARN of the cluster that hosts the service to create the task set in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "externalId",
        "The external ID associated with the task set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "The short name or ARN of the ECS service.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDelete",
        "Whether to allow deleting the task set without waiting for scaling down to 0. You can force a task set to delete even if it's in the process of scaling a resource. Normally, the provider drains all the tasks before deleting the task set. This bypasses that behavior and potentially leaves resources dangling.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformVersion",
        "The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceRegistries",
        "The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. Detailed below.",
        ecs_TaskSetServiceRegistries_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loadBalancers",
        "Details on load balancers that are used with a task set. Detailed below.",
        ecs_TaskSetLoadBalancer_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
