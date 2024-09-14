import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface InvitationAccepterArgs {
  // ARN of the behavior graph that the member account is accepting the invitation for.
  graphArn?: string;
}
export class InvitationAccepter extends DS_Resource {
  // ARN of the behavior graph that the member account is accepting the invitation for.
  public graphArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "graphArn",
        "ARN of the behavior graph that the member account is accepting the invitation for.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
