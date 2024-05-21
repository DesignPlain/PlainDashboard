import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig,
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig";
import {
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig,
  dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig";

export interface dataproc_ClusterVirtualClusterConfig {
  /*
Configuration of auxiliary services used by this cluster. 
Structure defined below.
*/
  auxiliaryServicesConfig?: dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig;

  /*
The configuration for running the Dataproc cluster on Kubernetes.
Structure defined below.
- - -
*/
  kubernetesClusterConfig?: dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig;

  /*
The Cloud Storage staging bucket used to stage files,
such as Hadoop jars, between client machines and the cluster.
Note: If you don't explicitly specify a `staging_bucket`
then GCP will auto create / assign one for you. However, you are not guaranteed
an auto generated bucket which is solely dedicated to your cluster; it may be shared
with other clusters in the same region/zone also choosing to use the auto generation
option.
*/
  stagingBucket?: string;
}

export function dataproc_ClusterVirtualClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "auxiliaryServicesConfig",
      "Configuration of auxiliary services used by this cluster. \nStructure defined below.",
      dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubernetesClusterConfig",
      "The configuration for running the Dataproc cluster on Kubernetes.\nStructure defined below.\n- - -",
      dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stagingBucket",
      "The Cloud Storage staging bucket used to stage files,\nsuch as Hadoop jars, between client machines and the cluster.\nNote: If you don't explicitly specify a `staging_bucket`\nthen GCP will auto create / assign one for you. However, you are not guaranteed\nan auto generated bucket which is solely dedicated to your cluster; it may be shared\nwith other clusters in the same region/zone also choosing to use the auto generation\noption.",
      [],
      false,
      true,
    ),
  ];
}
