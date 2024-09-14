import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
  //
  apiKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "apiKey", "", () => [], true, false),
  ];
}
