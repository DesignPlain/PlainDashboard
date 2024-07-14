import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ControlTowerControlArgs {
  // The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
  controlIdentifier?: string;

  // The ARN of the organizational unit.
  targetIdentifier?: string;
}
export class ControlTowerControl extends Resource {
  // The ARN of the organizational unit.
  public targetIdentifier?: string;

  // The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
  public controlIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "controlIdentifier",
        "The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetIdentifier",
        "The ARN of the organizational unit.",
        [],
        true,
        true,
      ),
    ];
  }
}
