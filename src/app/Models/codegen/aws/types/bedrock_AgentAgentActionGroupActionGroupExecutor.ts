import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_AgentAgentActionGroupActionGroupExecutor {
  /*
Custom control method for handling the information elicited from the user. Valid values: `RETURN_CONTROL`.
To skip using a Lambda function and instead return the predicted action group, in addition to the parameters and information required for it, in the `InvokeAgent` response, specify `RETURN_CONTROL`.
Only one of `custom_control` or `lambda` can be specified.
*/
  customControl?: string;

  /*
ARN of the Lambda function containing the business logic that is carried out upon invoking the action.
Only one of `lambda` or `custom_control` can be specified.
*/
  lambda?: string;
}

export function bedrock_AgentAgentActionGroupActionGroupExecutor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'lambda',
      'ARN of the Lambda function containing the business logic that is carried out upon invoking the action.\nOnly one of `lambda` or `custom_control` can be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'customControl',
      'Custom control method for handling the information elicited from the user. Valid values: `RETURN_CONTROL`.\nTo skip using a Lambda function and instead return the predicted action group, in addition to the parameters and information required for it, in the `InvokeAgent` response, specify `RETURN_CONTROL`.\nOnly one of `custom_control` or `lambda` can be specified.',
      () => [],
      false,
      false,
    ),
  ];
}
