import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementClusterSelector {
  // Required. The cluster labels. Cluster must have all labels to match.
  clusterLabels?: Map<string, string>;

  // The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.
  zone?: string;
}

export function dataproc_WorkflowTemplatePlacementClusterSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'clusterLabels',
      'Required. The cluster labels. Cluster must have all labels to match.',
      () => InputType_Map_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'zone',
      'The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.',
      () => [],
      false,
      true,
    ),
  ];
}
