import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
  // The password to use to connect to a resource.
  password?: string;

  // The username to use to connect to a resource.
  username?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password to use to connect to a resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The username to use to connect to a resource.",
      [],
      true,
      false,
    ),
  ];
}
