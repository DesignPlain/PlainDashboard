import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface secretmanager_getSecretsSecretTopic {
  // The resource name of the Pub/Sub topic that will be published to.
  name?: string;
}

export function secretmanager_getSecretsSecretTopic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The resource name of the Pub/Sub topic that will be published to.',
      () => [],
      true,
      false,
    ),
  ];
}
