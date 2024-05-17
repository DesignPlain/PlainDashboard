import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig {
  // A target for the deployment.
  NamespacedGkeDeploymentTarget?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NamespacedGkeDeploymentTarget",
      "A target for the deployment.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes(),
      false,
      true,
    ),
  ];
}
