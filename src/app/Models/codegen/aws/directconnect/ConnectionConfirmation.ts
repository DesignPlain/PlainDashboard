import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConnectionConfirmationArgs {
  // The ID of the hosted connection.
  connectionId?: string;
}
export class ConnectionConfirmation extends DS_Resource {
  // The ID of the hosted connection.
  public connectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'The ID of the hosted connection.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
