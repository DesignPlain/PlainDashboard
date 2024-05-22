import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InvitationAccepterArgs {
  // ARN of the behavior graph that the member account is accepting the invitation for.
  graphArn?: string;
}
export class InvitationAccepter extends Resource {
  // ARN of the behavior graph that the member account is accepting the invitation for.
  public graphArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "graphArn",
        "ARN of the behavior graph that the member account is accepting the invitation for.",
        [],
        true,
        true,
      ),
    ];
  }
}
