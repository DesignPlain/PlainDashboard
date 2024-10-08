import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef,
  cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes,
} from './cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef';
import {
  cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef,
  cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes,
} from './cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef';

export interface cloudrun_ServiceTemplateSpecContainerEnvFrom {
  /*
The Secret to select from.
Structure is documented below.
*/
  secretRef?: cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef;

  /*
The ConfigMap to select from.
Structure is documented below.
*/
  configMapRef?: cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef;

  // An optional identifier to prepend to each key in the ConfigMap.
  prefix?: string;
}

export function cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'secretRef',
      'The Secret to select from.\nStructure is documented below.',
      () => cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'configMapRef',
      'The ConfigMap to select from.\nStructure is documented below.',
      () => cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'An optional identifier to prepend to each key in the ConfigMap.',
      () => [],
      false,
      false,
    ),
  ];
}
