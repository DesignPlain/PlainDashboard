import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificatemanager_getCertificateMapGclbTargetIpConfig {
  // A list of ports
  ports?: Array<number>;

  // An external IP address
  ipAddress?: string;
}

export function certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ports',
      'A list of ports',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      'An external IP address',
      () => [],
      true,
      false,
    ),
  ];
}
