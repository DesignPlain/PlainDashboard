import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementClusterSelector,
  Dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementClusterSelector";
import {
  Dataproc_WorkflowTemplatePlacementManagedCluster,
  Dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedCluster";

export interface Dataproc_WorkflowTemplatePlacement {
  // A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted.
  ClusterSelector?: Dataproc_WorkflowTemplatePlacementClusterSelector;

  // A cluster that is managed by the workflow.
  ManagedCluster?: Dataproc_WorkflowTemplatePlacementManagedCluster;
}

export function Dataproc_WorkflowTemplatePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ClusterSelector",
      "A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted.",
      Dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ManagedCluster",
      "A cluster that is managed by the workflow.",
      Dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes(),
      false,
      true,
    ),
  ];
}
