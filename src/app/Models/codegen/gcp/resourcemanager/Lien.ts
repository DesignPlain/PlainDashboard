import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LienArgs {
  /*
A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters.
*/
  origin?: string;

  /*
A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").
*/
  parent?: string;

  /*
Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters.
*/
  reason?: string;

  /*
The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']


- - -
*/
  restrictions?: Array<string>;
}
export class Lien extends DS_Resource {
  /*
Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters.
*/
  public reason?: string;

  /*
The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']


- - -
*/
  public restrictions?: Array<string>;

  // Time of creation
  public createTime?: string;

  // A system-generated unique identifier for this Lien.
  public name?: string;

  /*
A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters.
*/
  public origin?: string;

  /*
A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").
*/
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'origin',
        'A stable, user-visible/meaningful string identifying the origin\nof the Lien, intended to be inspected programmatically. Maximum length of\n200 characters.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'A reference to the resource this Lien is attached to.\nThe server will validate the parent against those for which Liens are supported.\nSince a variety of objects can have Liens against them, you must provide the type\nprefix (e.g. "projects/my-project-name").',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'reason',
        'Concise user-visible strings indicating why an action cannot be performed\non a resource. Maximum length of 200 characters.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'restrictions',
        "The types of operations which should be blocked as a result of this Lien.\nEach value should correspond to an IAM permission. The server will validate\nthe permissions against those for which Liens are supported.  An empty\nlist is meaningless and will be rejected.\ne.g. ['resourcemanager.projects.delete']\n\n\n- - -",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
