import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuildv2_ConnectionInstallationState {
  /*
(Output)
Output only. Link to follow for next action. Empty string if the installation is already complete.
*/
  actionUri?: string;

  /*
(Output)
Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.
*/
  message?: string;

  /*
(Output)
Output only. Current step of the installation process.
*/
  stage?: string;
}

export function cloudbuildv2_ConnectionInstallationState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "(Output)\nOutput only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stage",
      "(Output)\nOutput only. Current step of the installation process.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "actionUri",
      "(Output)\nOutput only. Link to follow for next action. Empty string if the installation is already complete.",
      [],
      false,
      false,
    ),
  ];
}
