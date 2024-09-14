import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_getUserIdentityInfo {
  // The last name.
  lastName?: string;

  // The email address.
  email?: string;

  // The first name.
  firstName?: string;
}

export function connect_getUserIdentityInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastName",
      "The last name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "The email address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firstName",
      "The first name.",
      () => [],
      true,
      false,
    ),
  ];
}
