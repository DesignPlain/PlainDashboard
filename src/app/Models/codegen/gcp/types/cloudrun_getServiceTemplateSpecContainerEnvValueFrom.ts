import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef,
  cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes,
} from './cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef';

export interface cloudrun_getServiceTemplateSpecContainerEnvValueFrom {
  // Selects a key (version) of a secret in Secret Manager.
  secretKeyReves?: Array<cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef>;
}

export function cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'secretKeyReves',
      'Selects a key (version) of a secret in Secret Manager.',
      () =>
        cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
