import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Looker_InstanceOauthConfig {
  // The client ID for the Oauth config.
  ClientId?: string;

  // The client secret for the Oauth config.
  ClientSecret?: string;
}

export function Looker_InstanceOauthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientId",
      "The client ID for the Oauth config.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientSecret",
      "The client secret for the Oauth config.",
      [],
      true,
      false,
    ),
  ];
}
