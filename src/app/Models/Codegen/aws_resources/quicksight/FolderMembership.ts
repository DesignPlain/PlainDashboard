import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FolderMembershipArgs {
  // Identifier for the folder.
  folderId?: string;

  // ID of the asset (the dashboard, analysis, or dataset).
  memberId?: string;

  /*
Type of the member. Valid values are `ANALYSIS`, `DASHBOARD`, and `DATASET`.

The following arguments are optional:
*/
  memberType?: string;

  // AWS account ID.
  awsAccountId?: string;
}
export class FolderMembership extends Resource {
  // AWS account ID.
  public awsAccountId?: string;

  // Identifier for the folder.
  public folderId?: string;

  // ID of the asset (the dashboard, analysis, or dataset).
  public memberId?: string;

  /*
Type of the member. Valid values are `ANALYSIS`, `DASHBOARD`, and `DATASET`.

The following arguments are optional:
*/
  public memberType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "folderId",
        "Identifier for the folder.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "memberId",
        "ID of the asset (the dashboard, analysis, or dataset).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "memberType",
        "Type of the member. Valid values are `ANALYSIS`, `DASHBOARD`, and `DATASET`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        false,
      ),
    ];
  }
}
