import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_WorkflowTemplatePlacementClusterSelector,
  dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementClusterSelector";
import {
  dataproc_WorkflowTemplatePlacementManagedCluster,
  dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedCluster";

export interface dataproc_WorkflowTemplatePlacement {
  // A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted.
  clusterSelector?: dataproc_WorkflowTemplatePlacementClusterSelector;

  // A cluster that is managed by the workflow.
  managedCluster?: dataproc_WorkflowTemplatePlacementManagedCluster;
}

export function dataproc_WorkflowTemplatePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clusterSelector",
      "A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted.",
      dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "managedCluster",
      "A cluster that is managed by the workflow.",
      dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes(),
      false,
      true,
    ),
  ];
}
