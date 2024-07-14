import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupArgs {
  // The group's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".
  name?: string;

  // Path in which to create the group.
  path?: string;
}
export class Group extends Resource {
  // The [unique ID][1] assigned by AWS.
  public uniqueId?: string;

  // The ARN assigned by AWS for this group.
  public arn?: string;

  // The group's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".
  public name?: string;

  // Path in which to create the group.
  public path?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        'The group\'s name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "path",
        "Path in which to create the group.",
        [],
        false,
        false,
      ),
    ];
  }
}
