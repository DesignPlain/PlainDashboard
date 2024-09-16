import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_JobTemplateTemplateContainerEnvValueSourceSecretKeyRef,
  cloudrunv2_JobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from './cloudrunv2_JobTemplateTemplateContainerEnvValueSourceSecretKeyRef';

export interface cloudrunv2_JobTemplateTemplateContainerEnvValueSource {
  /*
Selects a secret and a specific version from Cloud Secret Manager.
Structure is documented below.
*/
  secretKeyRef?: cloudrunv2_JobTemplateTemplateContainerEnvValueSourceSecretKeyRef;
}

export function cloudrunv2_JobTemplateTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'secretKeyRef',
      'Selects a secret and a specific version from Cloud Secret Manager.\nStructure is documented below.',
      () =>
        cloudrunv2_JobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      false,
      false,
    ),
  ];
}
