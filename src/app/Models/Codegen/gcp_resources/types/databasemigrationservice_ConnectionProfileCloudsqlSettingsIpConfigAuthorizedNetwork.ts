import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork {
  // The allowlisted value for the access control list.
  value?: string;

  // The time when this access control entry expires in RFC 3339 format.
  expireTime?: string;

  // A label to identify this entry.
  label?: string;

  // Input only. The time-to-leave of this access control entry.
  ttl?: string;
}

export function databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expireTime",
      "The time when this access control entry expires in RFC 3339 format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "label",
      "A label to identify this entry.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ttl",
      "Input only. The time-to-leave of this access control entry.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The allowlisted value for the access control list.",
      [],
      true,
      false,
    ),
  ];
}
