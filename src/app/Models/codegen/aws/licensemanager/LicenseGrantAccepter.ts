import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LicenseGrantAccepterArgs {
  // The ARN of the grant to accept.
  grantArn?: string;
}
export class LicenseGrantAccepter extends DS_Resource {
  // A list of the allowed operations for the grant.
  public allowedOperations?: Array<string>;

  // The ARN of the grant to accept.
  public grantArn?: string;

  // The ARN of the license for the grant.
  public licenseArn?: string;

  // The Name of the grant.
  public name?: string;

  // The parent ARN.
  public parentArn?: string;

  // The home region for the license.
  public homeRegion?: string;

  // The target account for the grant.
  public principal?: string;

  // The grant status.
  public status?: string;

  // The grant version.
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'grantArn',
        'The ARN of the grant to accept.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
