import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificatemanager_getCertificateMapGclbTargetIpConfig {
  // A list of ports
  Ports?: Array<number>;

  // An external IP address
  IpAddress?: string;
}

export function Certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "A list of ports",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "An external IP address",
      [],
      true,
      false,
    ),
  ];
}
