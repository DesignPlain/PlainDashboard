import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConnectionConfirmationArgs {
  // The ID of the hosted connection.
  connectionId?: string;
}
export class ConnectionConfirmation extends Resource {
  // The ID of the hosted connection.
  public connectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "The ID of the hosted connection.",
        [],
        true,
        true,
      ),
    ];
  }
}
