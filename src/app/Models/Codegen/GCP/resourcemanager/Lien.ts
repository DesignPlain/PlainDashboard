import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LienArgs {
  /*
A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters.
*/
  Origin?: string;

  /*
A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").
*/
  Parent?: string;

  /*
Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters.
*/
  Reason?: string;

  /*
The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']


- - -
*/
  Restrictions?: Array<string>;
}
export class Lien extends Resource {
  // Time of creation
  public CreateTime?: string;

  // A system-generated unique identifier for this Lien.
  public Name?: string;

  /*
A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters.
*/
  public Origin?: string;

  /*
A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").
*/
  public Parent?: string;

  /*
Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters.
*/
  public Reason?: string;

  /*
The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']


- - -
*/
  public Restrictions?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Origin",
        "A stable, user-visible/meaningful string identifying the origin\nof the Lien, intended to be inspected programmatically. Maximum length of\n200 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        'A reference to the resource this Lien is attached to.\nThe server will validate the parent against those for which Liens are supported.\nSince a variety of objects can have Liens against them, you must provide the type\nprefix (e.g. "projects/my-project-name").',
      ),
      new DynamicUIProps(
        InputType.String,
        "Reason",
        "Concise user-visible strings indicating why an action cannot be performed\non a resource. Maximum length of 200 characters.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Restrictions",
        "The types of operations which should be blocked as a result of this Lien.\nEach value should correspond to an IAM permission. The server will validate\nthe permissions against those for which Liens are supported.  An empty\nlist is meaningless and will be rejected.\ne.g. ['resourcemanager.projects.delete']\n\n\n- - -",
      ),
    ];
  }
}
