import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ThingPrincipalAttachmentArgs {
  // The AWS IoT Certificate ARN or Amazon Cognito Identity ID.
  principal?: string;

  // The name of the thing.
  thing?: string;
}
export class ThingPrincipalAttachment extends DS_Resource {
  // The name of the thing.
  public thing?: string;

  // The AWS IoT Certificate ARN or Amazon Cognito Identity ID.
  public principal?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'principal',
        'The AWS IoT Certificate ARN or Amazon Cognito Identity ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'thing',
        'The name of the thing.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
