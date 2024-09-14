import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
  //
  password?: string;

  //
  username?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "password", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "username", "", () => [], true, false),
  ];
}
