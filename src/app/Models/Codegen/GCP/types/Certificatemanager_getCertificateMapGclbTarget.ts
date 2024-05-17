import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_getCertificateMapGclbTargetIpConfig,
  Certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes,
} from "./Certificatemanager_getCertificateMapGclbTargetIpConfig";

export interface Certificatemanager_getCertificateMapGclbTarget {
  // An IP configuration where this Certificate Map is serving
  IpConfigs?: Array<Certificatemanager_getCertificateMapGclbTargetIpConfig>;

  /*
Proxy name must be in the format projects/-/locations/-/targetHttpsProxies/-.
This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
'targetSslProxy' may be set.
*/
  TargetHttpsProxy?: string;

  /*
Proxy name must be in the format projects/-/locations/-/targetSslProxies/-.
This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
'targetSslProxy' may be set.
*/
  TargetSslProxy?: string;
}

export function Certificatemanager_getCertificateMapGclbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TargetSslProxy",
      "Proxy name must be in the format projects/*/locations/*/targetSslProxies/*.\nThis field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or\n'targetSslProxy' may be set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpConfigs",
      "An IP configuration where this Certificate Map is serving",
      Certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetHttpsProxy",
      "Proxy name must be in the format projects/*/locations/*/targetHttpsProxies/*.\nThis field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or\n'targetSslProxy' may be set.",
      [],
      true,
      false,
    ),
  ];
}
