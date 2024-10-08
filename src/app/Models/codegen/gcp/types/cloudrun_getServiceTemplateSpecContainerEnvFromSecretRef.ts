import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference,
  cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes,
} from './cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference';

export interface cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef {
  // The Secret to select from.
  localObjectReferences?: Array<cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference>;

  // Specify whether the Secret must be defined
  optional?: boolean;
}

export function cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'optional',
      'Specify whether the Secret must be defined',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'localObjectReferences',
      'The Secret to select from.',
      () =>
        cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(),
      true,
      false,
    ),
  ];
}
