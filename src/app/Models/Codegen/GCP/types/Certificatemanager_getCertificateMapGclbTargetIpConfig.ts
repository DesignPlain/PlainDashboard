import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificatemanager_getCertificateMapGclbTargetIpConfig {
  // An external IP address
  ipAddress?: string;

  // A list of ports
  ports?: Array<number>;
}

export function certificatemanager_getCertificateMapGclbTargetIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "An external IP address",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "A list of ports",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
