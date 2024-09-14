import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  shield_ApplicationLayerAutomaticResponseTimeouts,
  shield_ApplicationLayerAutomaticResponseTimeouts_GetTypes,
} from "../types/shield_ApplicationLayerAutomaticResponseTimeouts";

export interface ApplicationLayerAutomaticResponseArgs {
  // One of `COUNT` or `BLOCK`
  action?: string;

  // ARN of the resource to protect (Cloudfront Distributions and ALBs only at this time).
  resourceArn?: string;

  //
  timeouts?: shield_ApplicationLayerAutomaticResponseTimeouts;
}
export class ApplicationLayerAutomaticResponse extends DS_Resource {
  //
  public timeouts?: shield_ApplicationLayerAutomaticResponseTimeouts;

  // One of `COUNT` or `BLOCK`
  public action?: string;

  // ARN of the resource to protect (Cloudfront Distributions and ALBs only at this time).
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => shield_ApplicationLayerAutomaticResponseTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "One of `COUNT` or `BLOCK`",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "ARN of the resource to protect (Cloudfront Distributions and ALBs only at this time).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
