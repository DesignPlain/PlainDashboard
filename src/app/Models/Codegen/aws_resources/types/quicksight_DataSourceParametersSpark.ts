import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSourceParametersSpark {
  // The host to which to connect.
  host?: string;

  // The warehouse to which to connect.
  port?: number;
}

export function quicksight_DataSourceParametersSpark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "host",
      "The host to which to connect.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The warehouse to which to connect.",
      [],
      true,
      false,
    ),
  ];
}
