import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig,
  container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig_GetTypes,
} from "./container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig";

export interface container_ClusterNodePoolDefaultsNodeConfigDefaults {
  // The default Google Container Filesystem (GCFS) configuration at the cluster level. e.g. enable [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming) across all the node pools within the cluster. Structure is documented below.
  gcfsConfig?: container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;

  // The type of logging agent that is deployed by default for newly created node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.
  loggingVariant?: string;
}

export function container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "loggingVariant",
      "The type of logging agent that is deployed by default for newly created node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT. See [Increasing logging agent throughput](https://cloud.google.com/stackdriver/docs/solutions/gke/managing-logs#throughput) for more information.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcfsConfig",
      "The default Google Container Filesystem (GCFS) configuration at the cluster level. e.g. enable [image streaming](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming) across all the node pools within the cluster. Structure is documented below.",
      container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
