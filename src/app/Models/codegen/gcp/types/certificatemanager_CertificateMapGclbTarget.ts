import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificatemanager_CertificateMapGclbTargetIpConfig,
  certificatemanager_CertificateMapGclbTargetIpConfig_GetTypes,
} from './certificatemanager_CertificateMapGclbTargetIpConfig';

export interface certificatemanager_CertificateMapGclbTarget {
  /*
Proxy name must be in the format projects/-/locations/-/targetHttpsProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  targetHttpsProxy?: string;

  /*
Proxy name must be in the format projects/-/locations/-/targetSslProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  targetSslProxy?: string;

  /*
An IP configuration where this Certificate Map is serving
Structure is documented below.
*/
  ipConfigs?: Array<certificatemanager_CertificateMapGclbTargetIpConfig>;
}

export function certificatemanager_CertificateMapGclbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'targetHttpsProxy',
      'Proxy name must be in the format projects/*/locations/*/targetHttpsProxies/*.\nThis field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or\n`targetSslProxy` may be set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetSslProxy',
      'Proxy name must be in the format projects/*/locations/*/targetSslProxies/*.\nThis field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or\n`targetSslProxy` may be set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ipConfigs',
      'An IP configuration where this Certificate Map is serving\nStructure is documented below.',
      () => certificatemanager_CertificateMapGclbTargetIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
