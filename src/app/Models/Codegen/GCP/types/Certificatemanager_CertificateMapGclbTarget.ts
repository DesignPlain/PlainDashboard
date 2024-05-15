import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateMapGclbTargetIpConfig,
  Certificatemanager_CertificateMapGclbTargetIpConfig_GetTypes,
} from "./Certificatemanager_CertificateMapGclbTargetIpConfig";

export interface Certificatemanager_CertificateMapGclbTarget {
  /*
Proxy name must be in the format projects/-/locations/-/targetSslProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  TargetSslProxy?: string;

  /*
An IP configuration where this Certificate Map is serving
Structure is documented below.
*/
  IpConfigs?: Array<Certificatemanager_CertificateMapGclbTargetIpConfig>;

  /*
Proxy name must be in the format projects/-/locations/-/targetHttpsProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  TargetHttpsProxy?: string;
}

export function Certificatemanager_CertificateMapGclbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IpConfigs",
      "An IP configuration where this Certificate Map is serving\nStructure is documented below.",
      Certificatemanager_CertificateMapGclbTargetIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetHttpsProxy",
      "Proxy name must be in the format projects/*/locations/*/targetHttpsProxies/*.\nThis field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or\n`targetSslProxy` may be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetSslProxy",
      "Proxy name must be in the format projects/*/locations/*/targetSslProxies/*.\nThis field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or\n`targetSslProxy` may be set.",
      [],
      false,
      false,
    ),
  ];
}
