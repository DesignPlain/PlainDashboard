import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DefaultObjectAccessControlProjectTeam } from "../types/DefaultObjectAccessControlProjectTeam";

export interface DefaultObjectAccessControlArgs {
  // The name of the object, if applied to an object.
  Object?: string;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  Role?: string;

  // The name of the bucket.
  Bucket?: string;

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
  Entity?: string;
}
export class DefaultObjectAccessControl extends Resource {
  // The domain associated with the entity.
  public Domain?: string;

  // The email address associated with the entity.
  public Email?: string;

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
  public Entity?: string;

  // The ID for the entity
  public EntityId?: string;

  // The content generation of the object, if applied to an object.
  public Generation?: number;

  // The name of the bucket.
  public Bucket?: string;

  // The name of the object, if applied to an object.
  public Object?: string;

  /*
The project team associated with the entity
Structure is documented below.
*/
  public ProjectTeams?: Array<DefaultObjectAccessControlProjectTeam>;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Object",
        "The name of the object, if applied to an object.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The access permission for the entity.\nPossible values are: `OWNER`, `READER`.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Bucket", "The name of the bucket."),
      new DynamicUIProps(
        InputType.String,
        "Entity",
        'The entity holding the permission, in one of the following forms:\n* user-{{userId}}\n* user-{{email}} (such as "user-liz@example.com")\n* group-{{groupId}}\n* group-{{email}} (such as "group-example@googlegroups.com")\n* domain-{{domain}} (such as "domain-example.com")\n* project-team-{{projectId}}\n* allUsers\n* allAuthenticatedUsers',
      ),
    ];
  }
}
