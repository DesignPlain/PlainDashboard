import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_getListenerMutualAuthentication {
  //
  ignoreClientCertificateExpiry?: boolean;

  //
  mode?: string;

  //
  trustStoreArn?: string;
}

export function lb_getListenerMutualAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ignoreClientCertificateExpiry",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "mode", "", [], true, false),
    new DynamicUIProps(InputType.String, "trustStoreArn", "", [], true, false),
  ];
}
