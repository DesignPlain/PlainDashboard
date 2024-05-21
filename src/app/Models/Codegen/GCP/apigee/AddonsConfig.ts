import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigee_AddonsConfigAddonsConfig,
  apigee_AddonsConfigAddonsConfig_GetTypes,
} from "../types/apigee_AddonsConfigAddonsConfig";

export interface AddonsConfigArgs {
  /*
Addon configurations of the Apigee organization.
Structure is documented below.
*/
  addonsConfig?: apigee_AddonsConfigAddonsConfig;

  /*
Name of the Apigee organization.


- - -
*/
  org?: string;
}
export class AddonsConfig extends Resource {
  /*
Addon configurations of the Apigee organization.
Structure is documented below.
*/
  public addonsConfig?: apigee_AddonsConfigAddonsConfig;

  /*
Name of the Apigee organization.


- - -
*/
  public org?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "addonsConfig",
        "Addon configurations of the Apigee organization.\nStructure is documented below.",
        apigee_AddonsConfigAddonsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "org",
        "Name of the Apigee organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
