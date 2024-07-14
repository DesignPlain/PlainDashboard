import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_FunctionImageConfig {
  // Parameters that you want to pass in with `entry_point`.
  commands?: Array<string>;

  // Entry point to your application, which is typically the location of the runtime executable.
  entryPoints?: Array<string>;

  // Working directory.
  workingDirectory?: string;
}

export function lambda_FunctionImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "entryPoints",
      "Entry point to your application, which is typically the location of the runtime executable.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDirectory",
      "Working directory.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "Parameters that you want to pass in with `entry_point`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
