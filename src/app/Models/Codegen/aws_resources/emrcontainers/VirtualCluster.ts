import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emrcontainers_VirtualClusterContainerProvider,
  emrcontainers_VirtualClusterContainerProvider_GetTypes,
} from "../types/emrcontainers_VirtualClusterContainerProvider";

export interface VirtualClusterArgs {
  // Configuration block for the container provider associated with your cluster.
  containerProvider?: emrcontainers_VirtualClusterContainerProvider;

  // Name of the virtual cluster.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VirtualCluster extends Resource {
  // Name of the virtual cluster.
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the cluster.
  public arn?: string;

  // Configuration block for the container provider associated with your cluster.
  public containerProvider?: emrcontainers_VirtualClusterContainerProvider;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "containerProvider",
        "Configuration block for the container provider associated with your cluster.",
        emrcontainers_VirtualClusterContainerProvider_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the virtual cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
