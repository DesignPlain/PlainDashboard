import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_ClusterClientAuthenticationSasl,
  msk_ClusterClientAuthenticationSasl_GetTypes,
} from './msk_ClusterClientAuthenticationSasl';
import {
  msk_ClusterClientAuthenticationTls,
  msk_ClusterClientAuthenticationTls_GetTypes,
} from './msk_ClusterClientAuthenticationTls';

export interface msk_ClusterClientAuthentication {
  // Configuration block for specifying SASL client authentication. See below.
  sasl?: msk_ClusterClientAuthenticationSasl;

  // Configuration block for specifying TLS client authentication. See below.
  tls?: msk_ClusterClientAuthenticationTls;

  // Enables unauthenticated access.
  unauthenticated?: boolean;
}

export function msk_ClusterClientAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'tls',
      'Configuration block for specifying TLS client authentication. See below.',
      () => msk_ClusterClientAuthenticationTls_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'unauthenticated',
      'Enables unauthenticated access.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sasl',
      'Configuration block for specifying SASL client authentication. See below.',
      () => msk_ClusterClientAuthenticationSasl_GetTypes(),
      false,
      false,
    ),
  ];
}
