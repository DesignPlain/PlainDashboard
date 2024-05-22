import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
  /*
The properties to set on daemon config files. Property keys are specified in prefix:property format, 
for example spark:spark.kubernetes.container.image.
*/
  properties?: Map<string, string>;

  /*
The components that should be installed in this Dataproc cluster. The key must be a string from the   
KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
- --NOTE-- : `component_version[SPARK]` is mandatory to set, or the creation of the cluster will fail.
*/
  componentVersion?: Map<string, string>;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "The properties to set on daemon config files. Property keys are specified in prefix:property format, \nfor example spark:spark.kubernetes.container.image.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "componentVersion",
      "The components that should be installed in this Dataproc cluster. The key must be a string from the   \nKubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.\n* **NOTE** : `component_version[SPARK]` is mandatory to set, or the creation of the cluster will fail.",
      InputType_Map_GetTypes(),
      true,
      true,
    ),
  ];
}
