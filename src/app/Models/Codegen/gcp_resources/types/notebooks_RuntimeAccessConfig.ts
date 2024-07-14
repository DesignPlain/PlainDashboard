import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface notebooks_RuntimeAccessConfig {
  /*
The type of access mode this instance. For valid values, see
`https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#RuntimeAccessType`.
*/
  accessType?: string;

  /*
(Output)
The proxy endpoint that is used to access the runtime.
*/
  proxyUri?: string;

  /*
The owner of this runtime after creation. Format: `alias@example.com`.
Currently supports one owner only.
*/
  runtimeOwner?: string;
}

export function notebooks_RuntimeAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessType",
      "The type of access mode this instance. For valid values, see\n`https://cloud.google.com/vertex-ai/docs/workbench/reference/\nrest/v1/projects.locations.runtimes#RuntimeAccessType`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "proxyUri",
      "(Output)\nThe proxy endpoint that is used to access the runtime.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "runtimeOwner",
      "The owner of this runtime after creation. Format: `alias@example.com`.\nCurrently supports one owner only.",
      [],
      false,
      false,
    ),
  ];
}
