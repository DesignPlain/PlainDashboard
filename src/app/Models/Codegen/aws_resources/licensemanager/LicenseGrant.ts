import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LicenseGrantArgs {
  // A list of the allowed operations for the grant. This is a subset of the allowed operations on the license.
  allowedOperations?: Array<string>;

  // The ARN of the license to grant.
  licenseArn?: string;

  // The Name of the grant.
  name?: string;

  // The target account for the grant in the form of the ARN for an account principal of the root user.
  principal?: string;
}
export class LicenseGrant extends Resource {
  // The ARN of the license to grant.
  public licenseArn?: string;

  // The Name of the grant.
  public name?: string;

  // The target account for the grant in the form of the ARN for an account principal of the root user.
  public principal?: string;

  // The grant version.
  public version?: string;

  // A list of the allowed operations for the grant. This is a subset of the allowed operations on the license.
  public allowedOperations?: Array<string>;

  // The grant ARN.
  public arn?: string;

  // The home region for the license.
  public homeRegion?: string;

  // The parent ARN.
  public parentArn?: string;

  // The grant status.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "allowedOperations",
        "A list of the allowed operations for the grant. This is a subset of the allowed operations on the license.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "licenseArn",
        "The ARN of the license to grant.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The Name of the grant.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "The target account for the grant in the form of the ARN for an account principal of the root user.",
        [],
        true,
        true,
      ),
    ];
  }
}
