import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AddonsConfigAddonsConfig } from "../types/AddonsConfigAddonsConfig";

export interface AddonsConfigArgs {
  /*
Addon configurations of the Apigee organization.
Structure is documented below.
*/
  AddonsConfig?: AddonsConfigAddonsConfig;

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
  public AddonsConfig?: AddonsConfigAddonsConfig;

  /*
Name of the Apigee organization.


- - -
*/
  public Org?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AddonsConfig",
        "Addon configurations of the Apigee organization.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Org",
        "Name of the Apigee organization.\n\n\n- - -",
      ),
    ];
  }
}
