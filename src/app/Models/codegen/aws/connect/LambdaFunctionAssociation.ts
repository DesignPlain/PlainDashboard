import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LambdaFunctionAssociationArgs {
  // Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.
  functionArn?: string;

  // The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
  instanceId?: string;
}
export class LambdaFunctionAssociation extends DS_Resource {
  // Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.
  public functionArn?: string;

  // The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
  public instanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionArn",
        "Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
