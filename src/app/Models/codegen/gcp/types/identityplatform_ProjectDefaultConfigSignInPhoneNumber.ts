import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identityplatform_ProjectDefaultConfigSignInPhoneNumber {
  // Whether phone number auth is enabled for the project or not.
  enabled?: boolean;

  // A map of <test phone number, fake code> that can be used for phone auth testing.
  testPhoneNumbers?: Map<string, string>;
}

export function identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether phone number auth is enabled for the project or not.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "testPhoneNumbers",
      "A map of <test phone number, fake code> that can be used for phone auth testing.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
