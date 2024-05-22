import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
  // The API tokens used by Dynatrace API to authenticate various API calls.
  apiToken?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiToken",
      "The API tokens used by Dynatrace API to authenticate various API calls.",
      [],
      true,
      false,
    ),
  ];
}
