import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ProjectDefaultConfigSignInPhoneNumber {
  // Whether phone number auth is enabled for the project or not.
  Enabled?: boolean;

  // A map of <test phone number, fake code> that can be used for phone auth testing.
  TestPhoneNumbers?: Map<string, string>;
}

export function Identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether phone number auth is enabled for the project or not.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "TestPhoneNumbers",
      "A map of <test phone number, fake code> that can be used for phone auth testing.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
