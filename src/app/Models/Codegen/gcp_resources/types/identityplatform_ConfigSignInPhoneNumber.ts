import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identityplatform_ConfigSignInPhoneNumber {
  // A map of <test phone number, fake code> that can be used for phone auth testing.
  testPhoneNumbers?: Map<string, string>;

  // Whether phone number auth is enabled for the project or not.
  enabled?: boolean;
}

export function identityplatform_ConfigSignInPhoneNumber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether phone number auth is enabled for the project or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "testPhoneNumbers",
      "A map of <test phone number, fake code> that can be used for phone auth testing.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
