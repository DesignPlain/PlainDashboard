import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ThingPrincipalAttachmentArgs {
  // The AWS IoT Certificate ARN or Amazon Cognito Identity ID.
  principal?: string;

  // The name of the thing.
  thing?: string;
}
export class ThingPrincipalAttachment extends Resource {
  // The AWS IoT Certificate ARN or Amazon Cognito Identity ID.
  public principal?: string;

  // The name of the thing.
  public thing?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "principal",
        "The AWS IoT Certificate ARN or Amazon Cognito Identity ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "thing",
        "The name of the thing.",
        [],
        true,
        true,
      ),
    ];
  }
}
