import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface keyspaces_TableComment {
  // A description of the table.
  message?: string;
}

export function keyspaces_TableComment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "A description of the table.",
      [],
      false,
      true,
    ),
  ];
}
