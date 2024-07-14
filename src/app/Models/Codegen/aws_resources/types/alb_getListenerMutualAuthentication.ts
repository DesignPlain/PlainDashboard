import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_getListenerMutualAuthentication {
  //
  mode?: string;

  //
  trustStoreArn?: string;

  //
  ignoreClientCertificateExpiry?: boolean;
}

export function alb_getListenerMutualAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "trustStoreArn", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreClientCertificateExpiry",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "mode", "", [], true, false),
  ];
}
