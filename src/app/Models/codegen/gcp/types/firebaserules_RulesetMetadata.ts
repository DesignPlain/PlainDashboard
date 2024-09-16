import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firebaserules_RulesetMetadata {
  // Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.
  services?: Array<string>;
}

export function firebaserules_RulesetMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'services',
      'Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
