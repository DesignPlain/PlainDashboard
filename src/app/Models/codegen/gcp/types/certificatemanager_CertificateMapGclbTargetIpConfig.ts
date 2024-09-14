import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificatemanager_CertificateMapGclbTargetIpConfig {
  // An external IP address
  ipAddress?: string;

  // A list of ports
  ports?: Array<number>;
}

export function certificatemanager_CertificateMapGclbTargetIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "An external IP address",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "A list of ports",
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
