import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  servicediscovery_ServiceHealthCheckCustomConfig,
  servicediscovery_ServiceHealthCheckCustomConfig_GetTypes,
} from "../types/servicediscovery_ServiceHealthCheckCustomConfig";
import {
  servicediscovery_ServiceDnsConfig,
  servicediscovery_ServiceDnsConfig_GetTypes,
} from "../types/servicediscovery_ServiceDnsConfig";
import {
  servicediscovery_ServiceHealthCheckConfig,
  servicediscovery_ServiceHealthCheckConfig_GetTypes,
} from "../types/servicediscovery_ServiceHealthCheckConfig";

export interface ServiceArgs {
  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description of the service.
  description?: string;

  // A complex type that contains settings for ECS managed health checks.
  healthCheckCustomConfig?: servicediscovery_ServiceHealthCheckCustomConfig;

  // The name of the service.
  name?: string;

  // The ID of the namespace that you want to use to create the service.
  namespaceId?: string;

  // A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
  dnsConfig?: servicediscovery_ServiceDnsConfig;

  // A boolean that indicates all instances should be deleted from the service so that the service can be destroyed without error. These instances are not recoverable.
  forceDestroy?: boolean;

  // A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
  healthCheckConfig?: servicediscovery_ServiceHealthCheckConfig;

  // If present, specifies that the service instances are only discoverable using the `DiscoverInstances` API operation. No DNS records is registered for the service instances. The only valid value is `HTTP`.
  type?: string;
}
export class Service extends Resource {
  // A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
  public healthCheckConfig?: servicediscovery_ServiceHealthCheckConfig;

  // The ID of the namespace that you want to use to create the service.
  public namespaceId?: string;

  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // If present, specifies that the service instances are only discoverable using the `DiscoverInstances` API operation. No DNS records is registered for the service instances. The only valid value is `HTTP`.
  public type?: string;

  // The ARN of the service.
  public arn?: string;

  // The description of the service.
  public description?: string;

  // A boolean that indicates all instances should be deleted from the service so that the service can be destroyed without error. These instances are not recoverable.
  public forceDestroy?: boolean;

  // A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
  public dnsConfig?: servicediscovery_ServiceDnsConfig;

  // A complex type that contains settings for ECS managed health checks.
  public healthCheckCustomConfig?: servicediscovery_ServiceHealthCheckCustomConfig;

  // The name of the service.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "namespaceId",
        "The ID of the namespace that you want to use to create the service.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "A boolean that indicates all instances should be deleted from the service so that the service can be destroyed without error. These instances are not recoverable.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "If present, specifies that the service instances are only discoverable using the `DiscoverInstances` API operation. No DNS records is registered for the service instances. The only valid value is `HTTP`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthCheckCustomConfig",
        "A complex type that contains settings for ECS managed health checks.",
        servicediscovery_ServiceHealthCheckCustomConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the service.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dnsConfig",
        "A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.",
        servicediscovery_ServiceDnsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthCheckConfig",
        "A complex type that contains settings for an optional health check. Only for Public DNS namespaces.",
        servicediscovery_ServiceHealthCheckConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
