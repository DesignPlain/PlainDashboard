import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork {
  // A label to identify this entry.
  Label?: string;

  // Input only. The time-to-leave of this access control entry.
  Ttl?: string;

  // The allowlisted value for the access control list.
  Value?: string;

  // The time when this access control entry expires in RFC 3339 format.
  ExpireTime?: string;
}

export function Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The allowlisted value for the access control list.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpireTime",
      "The time when this access control entry expires in RFC 3339 format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Label",
      "A label to identify this entry.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ttl",
      "Input only. The time-to-leave of this access control entry.",
      [],
      false,
      true,
    ),
  ];
}
