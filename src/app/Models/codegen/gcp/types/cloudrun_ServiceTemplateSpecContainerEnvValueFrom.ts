import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef,
  cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes,
} from './cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef';

export interface cloudrun_ServiceTemplateSpecContainerEnvValueFrom {
  /*
Selects a key (version) of a secret in Secret Manager.
Structure is documented below.
*/
  secretKeyRef?: cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef;
}

export function cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'secretKeyRef',
      'Selects a key (version) of a secret in Secret Manager.\nStructure is documented below.',
      () =>
        cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
