import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RdsDbInstanceArgs {
  // A db username
  dbUser?: string;

  // The db instance to register for this stack. Changing this will force a new resource.
  rdsDbInstanceArn?: string;

  // The stack to register a db instance for. Changing this will force a new resource.
  stackId?: string;

  // A db password
  dbPassword?: string;
}
export class RdsDbInstance extends Resource {
  // The stack to register a db instance for. Changing this will force a new resource.
  public stackId?: string;

  // A db password
  public dbPassword?: string;

  // A db username
  public dbUser?: string;

  // The db instance to register for this stack. Changing this will force a new resource.
  public rdsDbInstanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbUser",
        "A db username",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rdsDbInstanceArn",
        "The db instance to register for this stack. Changing this will force a new resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "The stack to register a db instance for. Changing this will force a new resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbPassword",
        "A db password",
        [],
        true,
        false,
      ),
    ];
  }
}
