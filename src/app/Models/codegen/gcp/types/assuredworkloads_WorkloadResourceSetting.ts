import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface assuredworkloads_WorkloadResourceSetting {
  // User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
  displayName?: string;

  // Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.
  resourceId?: string;

  // Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER
  resourceType?: string;
}

export function assuredworkloads_WorkloadResourceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'User-assigned resource display name. If not empty it will be used to create a resource with the specified name.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceId',
      "Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceType',
      'Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER',
      () => [],
      false,
      true,
    ),
  ];
}
