import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSourceParametersAurora {
  // The database to which to connect.
  database?: string;

  // The host to which to connect.
  host?: string;

  // The port to which to connect.
  port?: number;
}

export function quicksight_DataSourceParametersAurora_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "The database to which to connect.",
      [],
      true,
      false,
    ),
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
      "The port to which to connect.",
      [],
      true,
      false,
    ),
  ];
}
