import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfig";

export interface Dataproc_WorkflowTemplatePlacementManagedCluster {
  // Required. The cluster configuration.
  Config?: Dataproc_WorkflowTemplatePlacementManagedClusterConfig;

  // The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.
  Labels?: Map<string, string>;

  // Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
  ClusterName?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "Required. The cluster configuration.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterName",
      "Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.",
      [],
      true,
      true,
    ),
  ];
}
