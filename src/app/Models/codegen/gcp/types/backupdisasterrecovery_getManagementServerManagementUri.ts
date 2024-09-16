import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface backupdisasterrecovery_getManagementServerManagementUri {
  // The management console api endpoint.
  api?: string;

  // The management console webUi.
  webUi?: string;
}

export function backupdisasterrecovery_getManagementServerManagementUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'api',
      'The management console api endpoint.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'webUi',
      'The management console webUi.',
      () => [],
      true,
      false,
    ),
  ];
}
