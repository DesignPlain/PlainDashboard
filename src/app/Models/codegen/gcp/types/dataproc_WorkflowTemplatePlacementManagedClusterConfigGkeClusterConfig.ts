import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes,
} from './dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig {
  // A target for the deployment.
  namespacedGkeDeploymentTarget?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'namespacedGkeDeploymentTarget',
      'A target for the deployment.',
      () =>
        dataproc_WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget_GetTypes(),
      false,
      true,
    ),
  ];
}
