import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface customerprofiles_DomainRuleBasedMatchingConflictResolution {
  // How the auto-merging process should resolve conflicts between different profiles. Valid values are `RECENCY` and `SOURCE`
  conflictResolvingModel?: string;

  // The `ObjectType` name that is used to resolve profile merging conflicts when choosing `SOURCE` as the `ConflictResolvingModel`.
  sourceName?: string;
}

export function customerprofiles_DomainRuleBasedMatchingConflictResolution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'conflictResolvingModel',
      'How the auto-merging process should resolve conflicts between different profiles. Valid values are `RECENCY` and `SOURCE`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceName',
      'The `ObjectType` name that is used to resolve profile merging conflicts when choosing `SOURCE` as the `ConflictResolvingModel`.',
      () => [],
      false,
      false,
    ),
  ];
}
