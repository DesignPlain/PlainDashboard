import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementClusterSelector {
  // Required. The cluster labels. Cluster must have all labels to match.
  ClusterLabels?: Map<string, string>;

  // The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.
  Zone?: string;
}

export function Dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "ClusterLabels",
      "Required. The cluster labels. Cluster must have all labels to match.",
      InputType_Map_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.",
      [],
      false,
      true,
    ),
  ];
}
