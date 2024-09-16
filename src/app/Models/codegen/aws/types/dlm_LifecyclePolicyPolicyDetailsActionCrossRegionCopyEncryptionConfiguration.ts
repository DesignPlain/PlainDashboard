import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
  //
  cmkArn?: string;

  //
  encrypted?: boolean;
}

export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'cmkArn', '', () => [], false, false),
    new DynamicUIProps(InputType.Bool, 'encrypted', '', () => [], false, false),
  ];
}
