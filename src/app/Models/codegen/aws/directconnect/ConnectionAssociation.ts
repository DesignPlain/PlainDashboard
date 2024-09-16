import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConnectionAssociationArgs {
  // The ID of the connection.
  connectionId?: string;

  // The ID of the LAG with which to associate the connection.
  lagId?: string;
}
export class ConnectionAssociation extends DS_Resource {
  // The ID of the connection.
  public connectionId?: string;

  // The ID of the LAG with which to associate the connection.
  public lagId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'The ID of the connection.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'lagId',
        'The ID of the LAG with which to associate the connection.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
