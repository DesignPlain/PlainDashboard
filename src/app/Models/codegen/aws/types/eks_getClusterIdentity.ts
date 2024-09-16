import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eks_getClusterIdentityOidc,
  eks_getClusterIdentityOidc_GetTypes,
} from './eks_getClusterIdentityOidc';

export interface eks_getClusterIdentity {
  // Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster.
  oidcs?: Array<eks_getClusterIdentityOidc>;
}

export function eks_getClusterIdentity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'oidcs',
      'Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster.',
      () => eks_getClusterIdentityOidc_GetTypes(),
      true,
      false,
    ),
  ];
}
