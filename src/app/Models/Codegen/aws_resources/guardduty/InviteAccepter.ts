import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InviteAccepterArgs {
  // The detector ID of the member GuardDuty account.
  detectorId?: string;

  // AWS account ID for primary account.
  masterAccountId?: string;
}
export class InviteAccepter extends Resource {
  // The detector ID of the member GuardDuty account.
  public detectorId?: string;

  // AWS account ID for primary account.
  public masterAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "The detector ID of the member GuardDuty account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterAccountId",
        "AWS account ID for primary account.",
        [],
        true,
        true,
      ),
    ];
  }
}
