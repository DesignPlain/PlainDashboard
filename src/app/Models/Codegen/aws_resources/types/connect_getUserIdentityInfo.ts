import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface connect_getUserIdentityInfo {
  // The email address.
  email?: string;

  // The first name.
  firstName?: string;

  // The last name.
  lastName?: string;
}

export function connect_getUserIdentityInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "The email address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firstName",
      "The first name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastName",
      "The last name.",
      [],
      true,
      false,
    ),
  ];
}
