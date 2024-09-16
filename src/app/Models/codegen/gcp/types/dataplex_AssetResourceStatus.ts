import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataplex_AssetResourceStatus {
  // Output only. The time when the asset was last updated.
  updateTime?: string;

  // Additional information about the current state.
  message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  state?: string;
}

export function dataplex_AssetResourceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'updateTime',
      'Output only. The time when the asset was last updated.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      'Additional information about the current state.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED',
      () => [],
      false,
      false,
    ),
  ];
}
