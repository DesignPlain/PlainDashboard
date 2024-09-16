import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface InboundConnectionAccepterArgs {
  // Specifies the ID of the connection to accept.
  connectionId?: string;
}
export class InboundConnectionAccepter extends DS_Resource {
  // Specifies the ID of the connection to accept.
  public connectionId?: string;

  // Status of the connection request.
  public connectionStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'Specifies the ID of the connection to accept.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
