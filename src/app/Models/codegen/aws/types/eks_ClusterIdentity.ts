import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eks_ClusterIdentityOidc,
  eks_ClusterIdentityOidc_GetTypes,
} from './eks_ClusterIdentityOidc';

export interface eks_ClusterIdentity {
  // Nested block containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below.
  oidcs?: Array<eks_ClusterIdentityOidc>;
}

export function eks_ClusterIdentity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'oidcs',
      'Nested block containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below.',
      () => eks_ClusterIdentityOidc_GetTypes(),
      false,
      false,
    ),
  ];
}
