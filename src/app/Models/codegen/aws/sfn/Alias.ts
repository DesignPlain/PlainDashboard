import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sfn_AliasRoutingConfiguration,
  sfn_AliasRoutingConfiguration_GetTypes,
} from '../types/sfn_AliasRoutingConfiguration';

export interface AliasArgs {
  // Description of the alias.
  description?: string;

  // Name for the alias you are creating.
  name?: string;

  // The StateMachine alias' route configuration settings. Fields documented below
  routingConfigurations?: Array<sfn_AliasRoutingConfiguration>;
}
export class Alias extends DS_Resource {
  // The date the state machine alias was created.
  public creationDate?: string;

  // Description of the alias.
  public description?: string;

  // Name for the alias you are creating.
  public name?: string;

  // The StateMachine alias' route configuration settings. Fields documented below
  public routingConfigurations?: Array<sfn_AliasRoutingConfiguration>;

  // The Amazon Resource Name (ARN) identifying your state machine alias.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the alias.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for the alias you are creating.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'routingConfigurations',
        "The StateMachine alias' route configuration settings. Fields documented below",
        () => sfn_AliasRoutingConfiguration_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
