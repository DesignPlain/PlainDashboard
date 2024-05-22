import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sfn_AliasRoutingConfiguration,
  sfn_AliasRoutingConfiguration_GetTypes,
} from "../types/sfn_AliasRoutingConfiguration";

export interface AliasArgs {
  // Name for the alias you are creating.
  name?: string;

  // The StateMachine alias' route configuration settings. Fields documented below
  routingConfigurations?: Array<sfn_AliasRoutingConfiguration>;

  // Description of the alias.
  description?: string;
}
export class Alias extends Resource {
  // The Amazon Resource Name (ARN) identifying your state machine alias.
  public arn?: string;

  // The date the state machine alias was created.
  public creationDate?: string;

  // Description of the alias.
  public description?: string;

  // Name for the alias you are creating.
  public name?: string;

  // The StateMachine alias' route configuration settings. Fields documented below
  public routingConfigurations?: Array<sfn_AliasRoutingConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the alias you are creating.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routingConfigurations",
        "The StateMachine alias' route configuration settings. Fields documented below",
        sfn_AliasRoutingConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the alias.",
        [],
        false,
        false,
      ),
    ];
  }
}
