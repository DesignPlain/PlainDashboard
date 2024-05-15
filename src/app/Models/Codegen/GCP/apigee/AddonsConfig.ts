import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_AddonsConfigAddonsConfig,
  Apigee_AddonsConfigAddonsConfig_GetTypes,
} from "../types/Apigee_AddonsConfigAddonsConfig";

export interface AddonsConfigArgs {
  /*
Addon configurations of the Apigee organization.
Structure is documented below.
*/
  AddonsConfig?: Apigee_AddonsConfigAddonsConfig;

  /*
Name of the Apigee organization.


- - -
*/
  Org?: string;
}
export class AddonsConfig extends Resource {
  /*
Addon configurations of the Apigee organization.
Structure is documented below.
*/
  public AddonsConfig?: Apigee_AddonsConfigAddonsConfig;

  /*
Name of the Apigee organization.


- - -
*/
  public Org?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "AddonsConfig",
        "Addon configurations of the Apigee organization.\nStructure is documented below.",
        Apigee_AddonsConfigAddonsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Org",
        "Name of the Apigee organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
