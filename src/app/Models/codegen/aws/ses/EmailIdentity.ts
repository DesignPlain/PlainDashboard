import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EmailIdentityArgs {
  // The email address to assign to SES.
  email?: string;
}
export class EmailIdentity extends DS_Resource {
  // The ARN of the email identity.
  public arn?: string;

  // The email address to assign to SES.
  public email?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'email',
        'The email address to assign to SES.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
