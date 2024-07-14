import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface rds_getProxyAuth {
  //
  authScheme?: string;

  //
  clientPasswordAuthType?: string;

  //
  description?: string;

  //
  iamAuth?: string;

  //
  secretArn?: string;

  //
  username?: string;
}

export function rds_getProxyAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientPasswordAuthType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "description", "", [], true, false),
    new DynamicUIProps(InputType.String, "iamAuth", "", [], true, false),
    new DynamicUIProps(InputType.String, "secretArn", "", [], true, false),
    new DynamicUIProps(InputType.String, "username", "", [], true, false),
    new DynamicUIProps(InputType.String, "authScheme", "", [], true, false),
  ];
}
