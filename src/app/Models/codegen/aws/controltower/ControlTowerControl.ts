import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  controltower_ControlTowerControlParameter,
  controltower_ControlTowerControlParameter_GetTypes,
} from '../types/controltower_ControlTowerControlParameter';

export interface ControlTowerControlArgs {
  // The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
  controlIdentifier?: string;

  // Parameter values which are specified to configure the control when you enable it. See Parameters for more details.
  parameters?: Array<controltower_ControlTowerControlParameter>;

  /*
The ARN of the organizational unit.

The following arguments are optional:
*/
  targetIdentifier?: string;
}
export class ControlTowerControl extends DS_Resource {
  /*
The ARN of the organizational unit.

The following arguments are optional:
*/
  public targetIdentifier?: string;

  // The ARN of the EnabledControl resource.
  public arn?: string;

  // The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
  public controlIdentifier?: string;

  // Parameter values which are specified to configure the control when you enable it. See Parameters for more details.
  public parameters?: Array<controltower_ControlTowerControlParameter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'controlIdentifier',
        'The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'parameters',
        'Parameter values which are specified to configure the control when you enable it. See Parameters for more details.',
        () => controltower_ControlTowerControlParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetIdentifier',
        'The ARN of the organizational unit.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
    ];
  }
}
