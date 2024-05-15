import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigClientPermissions {
  // When true, end users cannot sign up for a new account on the associated project through any of our API methods
  DisabledUserSignup?: boolean;

  // When true, end users cannot delete their account on the associated project through any of our API methods
  DisabledUserDeletion?: boolean;
}

export function Identityplatform_ConfigClientPermissions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DisabledUserSignup",
      "When true, end users cannot sign up for a new account on the associated project through any of our API methods",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisabledUserDeletion",
      "When true, end users cannot delete their account on the associated project through any of our API methods",
      [],
      false,
      false,
    ),
  ];
}
