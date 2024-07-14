import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget {
  // A namespace within the GKE cluster to deploy into.
  clusterNamespace?: string;

  // The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  targetGkeCluster?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterNamespace",
      "A namespace within the GKE cluster to deploy into.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGkeCluster",
      "The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      [],
      false,
      true,
    ),
  ];
}
