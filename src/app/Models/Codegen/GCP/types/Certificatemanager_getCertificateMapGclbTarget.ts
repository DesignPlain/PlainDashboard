import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificatemanager_getCertificateMapGclbTargetIpConfig,
  certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes,
} from "./certificatemanager_getCertificateMapGclbTargetIpConfig";

export interface certificatemanager_getCertificateMapGclbTarget {
  // An IP configuration where this Certificate Map is serving
  ipConfigs?: Array<certificatemanager_getCertificateMapGclbTargetIpConfig>;

  /*
Proxy name must be in the format projects/-/locations/-/targetHttpsProxies/-.
This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
'targetSslProxy' may be set.
*/
  targetHttpsProxy?: string;

  /*
Proxy name must be in the format projects/-/locations/-/targetSslProxies/-.
This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
'targetSslProxy' may be set.
*/
  targetSslProxy?: string;
}

export function certificatemanager_getCertificateMapGclbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetHttpsProxy",
      "Proxy name must be in the format projects/*/locations/*/targetHttpsProxies/*.\nThis field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or\n'targetSslProxy' may be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetSslProxy",
      "Proxy name must be in the format projects/*/locations/*/targetSslProxies/*.\nThis field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or\n'targetSslProxy' may be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipConfigs",
      "An IP configuration where this Certificate Map is serving",
      certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
