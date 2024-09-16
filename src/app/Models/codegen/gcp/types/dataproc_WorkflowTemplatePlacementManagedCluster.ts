import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes,
} from './dataproc_WorkflowTemplatePlacementManagedClusterConfig';

export interface dataproc_WorkflowTemplatePlacementManagedCluster {
  // Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
  clusterName?: string;

  // Required. The cluster configuration.
  config?: dataproc_WorkflowTemplatePlacementManagedClusterConfig;

  // The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.
  labels?: Map<string, string>;
}

export function dataproc_WorkflowTemplatePlacementManagedCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clusterName',
      'Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'config',
      'Required. The cluster configuration.',
      () => dataproc_WorkflowTemplatePlacementManagedClusterConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
