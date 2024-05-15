import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Assuredworkloads_WorkloadResourceSetting {
  // Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER
  ResourceType?: string;

  // User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
  DisplayName?: string;

  // Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.
  ResourceId?: string;
}

export function Assuredworkloads_WorkloadResourceSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "User-assigned resource display name. If not empty it will be used to create a resource with the specified name.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceId",
      "Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceType",
      "Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER",
      [],
      false,
      true,
    ),
  ];
}
