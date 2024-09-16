import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  customerprofiles_DomainMatchingAutoMergingConflictResolution,
  customerprofiles_DomainMatchingAutoMergingConflictResolution_GetTypes,
} from './customerprofiles_DomainMatchingAutoMergingConflictResolution';
import {
  customerprofiles_DomainMatchingAutoMergingConsolidation,
  customerprofiles_DomainMatchingAutoMergingConsolidation_GetTypes,
} from './customerprofiles_DomainMatchingAutoMergingConsolidation';

export interface customerprofiles_DomainMatchingAutoMerging {
  // A block that specifies how the auto-merging process should resolve conflicts between different profiles. Documented below.
  conflictResolution?: customerprofiles_DomainMatchingAutoMergingConflictResolution;

  /*
A block that specifies a list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged. Documented below.
- `min_allowed_confidence_score_for_merging ` - (Optional) A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles.
*/
  consolidation?: customerprofiles_DomainMatchingAutoMergingConsolidation;

  // The flag that enables the auto-merging of duplicate profiles.
  enabled?: boolean;

  //
  minAllowedConfidenceScoreForMerging?: number;
}

export function customerprofiles_DomainMatchingAutoMerging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'conflictResolution',
      'A block that specifies how the auto-merging process should resolve conflicts between different profiles. Documented below.',
      () =>
        customerprofiles_DomainMatchingAutoMergingConflictResolution_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'consolidation',
      'A block that specifies a list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged. Documented below.\n* `min_allowed_confidence_score_for_merging ` - (Optional) A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles.',
      () => customerprofiles_DomainMatchingAutoMergingConsolidation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'The flag that enables the auto-merging of duplicate profiles.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minAllowedConfidenceScoreForMerging',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
