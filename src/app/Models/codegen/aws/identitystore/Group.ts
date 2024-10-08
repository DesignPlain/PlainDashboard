import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identitystore_GroupExternalId,
  identitystore_GroupExternalId_GetTypes,
} from '../types/identitystore_GroupExternalId';

export interface GroupArgs {
  // A string containing the description of the group.
  description?: string;

  // A string containing the name of the group. This value is commonly displayed when the group is referenced.
  displayName?: string;

  /*
The globally unique identifier for the identity store.

The following arguments are optional:
*/
  identityStoreId?: string;
}
export class Group extends DS_Resource {
  // A string containing the description of the group.
  public description?: string;

  // A string containing the name of the group. This value is commonly displayed when the group is referenced.
  public displayName?: string;

  // A list of external IDs that contains the identifiers issued to this resource by an external identity provider. See External IDs below.
  public externalIds?: Array<identitystore_GroupExternalId>;

  // The identifier of the newly created group in the identity store.
  public groupId?: string;

  /*
The globally unique identifier for the identity store.

The following arguments are optional:
*/
  public identityStoreId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'A string containing the name of the group. This value is commonly displayed when the group is referenced.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'identityStoreId',
        'The globally unique identifier for the identity store.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A string containing the description of the group.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
