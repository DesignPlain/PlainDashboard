import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FlowhookArgs {
  // Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.
  ContinueOnError?: boolean;

  // Description of the flow hook.
  Description?: string;

  // The resource ID of the environment.
  Environment?: string;

  // Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.
  FlowHookPoint?: string;

  // The Apigee Organization associated with the environment
  OrgId?: string;

  // Id of the Sharedflow attaching to a flowhook point.
  Sharedflow?: string;
}
export class Flowhook extends Resource {
  // Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.
  public ContinueOnError?: boolean;

  // Description of the flow hook.
  public Description?: string;

  // The resource ID of the environment.
  public Environment?: string;

  // Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.
  public FlowHookPoint?: string;

  // The Apigee Organization associated with the environment
  public OrgId?: string;

  // Id of the Sharedflow attaching to a flowhook point.
  public Sharedflow?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "ContinueOnError",
        "Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the flow hook.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "The resource ID of the environment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "FlowHookPoint",
        "Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the environment",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Sharedflow",
        "Id of the Sharedflow attaching to a flowhook point.",
        [],
        true,
        true,
      ),
    ];
  }
}
