import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecurityConfigurationArgs {
  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  // A JSON formatted Security Configuration
  configuration?: string;

  // The name of the EMR Security Configuration. By default generated by this provider.
  name?: string;
}
export class SecurityConfiguration extends Resource {
  // Date the Security Configuration was created
  public creationDate?: string;

  // The name of the EMR Security Configuration. By default generated by this provider.
  public name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // A JSON formatted Security Configuration
  public configuration?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configuration",
        "A JSON formatted Security Configuration",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the EMR Security Configuration. By default generated by this provider.",
        [],
        false,
        true,
      ),
    ];
  }
}