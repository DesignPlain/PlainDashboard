import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  shield_DrtAccessRoleArnAssociationTimeouts,
  shield_DrtAccessRoleArnAssociationTimeouts_GetTypes,
} from "../types/shield_DrtAccessRoleArnAssociationTimeouts";

export interface DrtAccessRoleArnAssociationArgs {
  // The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.
  roleArn?: string;

  //
  timeouts?: shield_DrtAccessRoleArnAssociationTimeouts;
}
export class DrtAccessRoleArnAssociation extends Resource {
  // The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.
  public roleArn?: string;

  //
  public timeouts?: shield_DrtAccessRoleArnAssociationTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        shield_DrtAccessRoleArnAssociationTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
