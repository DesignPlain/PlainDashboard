import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfilePrivateConnectivity {
  // A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`
  PrivateConnection?: string;
}

export function Datastream_ConnectionProfilePrivateConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PrivateConnection",
      "A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`",
      [],
      true,
      false,
    ),
  ];
}
