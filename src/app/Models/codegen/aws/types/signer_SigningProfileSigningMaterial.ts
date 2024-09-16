import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface signer_SigningProfileSigningMaterial {
  // The Amazon Resource Name (ARN) of the certificates that is used to sign your code.
  certificateArn?: string;
}

export function signer_SigningProfileSigningMaterial_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'certificateArn',
      'The Amazon Resource Name (ARN) of the certificates that is used to sign your code.',
      () => [],
      true,
      true,
    ),
  ];
}
