import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig,
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig";
import {
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig,
  Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig";

export interface Dataproc_ClusterVirtualClusterConfig {
  /*
Configuration of auxiliary services used by this cluster. 
Structure defined below.
*/
  AuxiliaryServicesConfig?: Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig;

  /*
The configuration for running the Dataproc cluster on Kubernetes.
Structure defined below.
- - -
*/
  KubernetesClusterConfig?: Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig;

  /*
The Cloud Storage staging bucket used to stage files,
such as Hadoop jars, between client machines and the cluster.
Note: If you don't explicitly specify a `staging_bucket`
then GCP will auto create / assign one for you. However, you are not guaranteed
an auto generated bucket which is solely dedicated to your cluster; it may be shared
with other clusters in the same region/zone also choosing to use the auto generation
option.
*/
  StagingBucket?: string;
}

export function Dataproc_ClusterVirtualClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AuxiliaryServicesConfig",
      "Configuration of auxiliary services used by this cluster. \nStructure defined below.",
      Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KubernetesClusterConfig",
      "The configuration for running the Dataproc cluster on Kubernetes.\nStructure defined below.\n- - -",
      Dataproc_ClusterVirtualClusterConfigKubernetesClusterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StagingBucket",
      "The Cloud Storage staging bucket used to stage files,\nsuch as Hadoop jars, between client machines and the cluster.\nNote: If you don't explicitly specify a `staging_bucket`\nthen GCP will auto create / assign one for you. However, you are not guaranteed\nan auto generated bucket which is solely dedicated to your cluster; it may be shared\nwith other clusters in the same region/zone also choosing to use the auto generation\noption.",
      [],
      false,
      true,
    ),
  ];
}
