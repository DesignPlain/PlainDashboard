import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_getOrganizationalUnitsChild {
  // ARN of the organizational unit
  arn?: string;

  // Parent identifier of the organizational units.
  id?: string;

  // Name of the organizational unit
  name?: string;
}

export function organizations_getOrganizationalUnitsChild_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the organizational unit",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Parent identifier of the organizational units.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the organizational unit",
      [],
      true,
      false,
    ),
  ];
}
