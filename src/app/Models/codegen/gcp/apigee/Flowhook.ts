import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface FlowhookArgs {
  // Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.
  continueOnError?: boolean;

  // Description of the flow hook.
  description?: string;

  // The resource ID of the environment.
  environment?: string;

  // Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.
  flowHookPoint?: string;

  // The Apigee Organization associated with the environment
  orgId?: string;

  // Id of the Sharedflow attaching to a flowhook point.
  sharedflow?: string;
}
export class Flowhook extends DS_Resource {
  // The resource ID of the environment.
  public environment?: string;

  // Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.
  public flowHookPoint?: string;

  // The Apigee Organization associated with the environment
  public orgId?: string;

  // Id of the Sharedflow attaching to a flowhook point.
  public sharedflow?: string;

  // Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.
  public continueOnError?: boolean;

  // Description of the flow hook.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'continueOnError',
        'Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the flow hook.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'environment',
        'The resource ID of the environment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'flowHookPoint',
        'Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'orgId',
        'The Apigee Organization associated with the environment',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sharedflow',
        'Id of the Sharedflow attaching to a flowhook point.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
