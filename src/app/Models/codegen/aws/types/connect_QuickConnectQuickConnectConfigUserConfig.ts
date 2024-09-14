import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_QuickConnectQuickConnectConfigUserConfig {
  // Specifies the identifier of the contact flow.
  contactFlowId?: string;

  // Specifies the identifier for the user.
  userId?: string;
}

export function connect_QuickConnectQuickConnectConfigUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contactFlowId",
      "Specifies the identifier of the contact flow.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userId",
      "Specifies the identifier for the user.",
      () => [],
      true,
      false,
    ),
  ];
}
