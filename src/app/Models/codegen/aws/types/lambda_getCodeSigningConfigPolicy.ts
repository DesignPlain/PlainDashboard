import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_getCodeSigningConfigPolicy {
  // Code signing configuration policy for deployment validation failure.
  untrustedArtifactOnDeployment?: string;
}

export function lambda_getCodeSigningConfigPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'untrustedArtifactOnDeployment',
      'Code signing configuration policy for deployment validation failure.',
      () => [],
      true,
      false,
    ),
  ];
}
