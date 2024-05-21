import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datastream_ConnectionProfilePrivateConnectivity {
  // A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`
  privateConnection?: string;
}

export function datastream_ConnectionProfilePrivateConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "privateConnection",
      "A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`",
      [],
      true,
      false,
    ),
  ];
}
