import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InboundConnectionAccepterArgs {
  // Specifies the ID of the connection to accept.
  connectionId?: string;
}
export class InboundConnectionAccepter extends Resource {
  // Specifies the ID of the connection to accept.
  public connectionId?: string;

  // Status of the connection request.
  public connectionStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "Specifies the ID of the connection to accept.",
        [],
        true,
        true,
      ),
    ];
  }
}
