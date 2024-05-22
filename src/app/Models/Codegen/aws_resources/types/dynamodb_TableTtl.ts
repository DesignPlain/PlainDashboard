import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_TableTtl {
  // Whether TTL is enabled.
  enabled?: boolean;

  // Name of the table attribute to store the TTL timestamp in.
  attributeName?: string;
}

export function dynamodb_TableTtl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "attributeName",
      "Name of the table attribute to store the TTL timestamp in.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether TTL is enabled.",
      [],
      false,
      false,
    ),
  ];
}
