import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications {
  // Whether the existing objects should be replicated. Either `"Enabled"` or `"Disabled"`.
  status?: string;
}

export function s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'Whether the existing objects should be replicated. Either `"Enabled"` or `"Disabled"`.',
      () => [],
      true,
      false,
    ),
  ];
}
