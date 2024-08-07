import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_InputSecurityGroupWhitelistRule {
  // The IPv4 CIDR that's whitelisted.
  cidr?: string;
}

export function medialive_InputSecurityGroupWhitelistRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidr",
      "The IPv4 CIDR that's whitelisted.",
      [],
      true,
      false,
    ),
  ];
}
