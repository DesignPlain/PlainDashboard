import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget {
  // A namespace within the GKE cluster to deploy into.
  ClusterNamespace?: string;

  // The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  TargetGkeCluster?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterNamespace",
      "A namespace within the GKE cluster to deploy into.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetGkeCluster",
      "The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      [],
      false,
      true,
    ),
  ];
}
