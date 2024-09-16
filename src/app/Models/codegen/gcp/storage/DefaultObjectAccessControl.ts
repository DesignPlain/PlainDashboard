import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  storage_DefaultObjectAccessControlProjectTeam,
  storage_DefaultObjectAccessControlProjectTeam_GetTypes,
} from '../types/storage_DefaultObjectAccessControlProjectTeam';

export interface DefaultObjectAccessControlArgs {
  // The name of the bucket.
  bucket?: string;

  /*
The entity holding the permission, in one of the following forms:
- user-{{userId}}
- user-{{email}} (such as "user-liz@example.com")
- group-{{groupId}}
- group-{{email}} (such as "group-example@googlegroups.com")
- domain-{{domain}} (such as "domain-example.com")
- project-team-{{projectId}}
- allUsers
- allAuthenticatedUsers
*/
  entity?: string;

  // The name of the object, if applied to an object.
  object?: string;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  role?: string;
}
export class DefaultObjectAccessControl extends DS_Resource {
  /*
The project team associated with the entity
Structure is documented below.
*/
  public projectTeams?: Array<storage_DefaultObjectAccessControlProjectTeam>;

  // The name of the bucket.
  public bucket?: string;

  // The domain associated with the entity.
  public domain?: string;

  /*
The entity holding the permission, in one of the following forms:
- user-{{userId}}
- user-{{email}} (such as "user-liz@example.com")
- group-{{groupId}}
- group-{{email}} (such as "group-example@googlegroups.com")
- domain-{{domain}} (such as "domain-example.com")
- project-team-{{projectId}}
- allUsers
- allAuthenticatedUsers
*/
  public entity?: string;

  // The ID for the entity
  public entityId?: string;

  // The email address associated with the entity.
  public email?: string;

  // The content generation of the object, if applied to an object.
  public generation?: number;

  // The name of the object, if applied to an object.
  public object?: string;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'The name of the bucket.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'entity',
        'The entity holding the permission, in one of the following forms:\n* user-{{userId}}\n* user-{{email}} (such as "user-liz@example.com")\n* group-{{groupId}}\n* group-{{email}} (such as "group-example@googlegroups.com")\n* domain-{{domain}} (such as "domain-example.com")\n* project-team-{{projectId}}\n* allUsers\n* allAuthenticatedUsers',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'object',
        'The name of the object, if applied to an object.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The access permission for the entity.\nPossible values are: `OWNER`, `READER`.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
    ];
  }
}
