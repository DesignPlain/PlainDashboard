import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface StudioSessionMappingArgs {
  // The globally unique identifier (GUID) of the user or group from the Amazon Web Services SSO Identity Store.
  identityId?: string;

  // The name of the user or group from the Amazon Web Services SSO Identity Store.
  identityName?: string;

  // Specifies whether the identity to map to the Amazon EMR Studio is a `USER` or a `GROUP`.
  identityType?: string;

  // The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role.
  sessionPolicyArn?: string;

  // The ID of the Amazon EMR Studio to which the user or group will be mapped.
  studioId?: string;
}
export class StudioSessionMapping extends Resource {
  // Specifies whether the identity to map to the Amazon EMR Studio is a `USER` or a `GROUP`.
  public identityType?: string;

  // The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role.
  public sessionPolicyArn?: string;

  // The ID of the Amazon EMR Studio to which the user or group will be mapped.
  public studioId?: string;

  // The globally unique identifier (GUID) of the user or group from the Amazon Web Services SSO Identity Store.
  public identityId?: string;

  // The name of the user or group from the Amazon Web Services SSO Identity Store.
  public identityName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "identityId",
        "The globally unique identifier (GUID) of the user or group from the Amazon Web Services SSO Identity Store.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityName",
        "The name of the user or group from the Amazon Web Services SSO Identity Store.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityType",
        "Specifies whether the identity to map to the Amazon EMR Studio is a `USER` or a `GROUP`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionPolicyArn",
        "The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "studioId",
        "The ID of the Amazon EMR Studio to which the user or group will be mapped.",
        [],
        true,
        true,
      ),
    ];
  }
}
