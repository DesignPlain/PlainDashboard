import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AccessGrantsLocationArgs {
  //
  accountId?: string;

  /*
The ARN of the IAM role that S3 Access Grants should use when fulfilling runtime access
requests to the location.
*/
  iamRoleArn?: string;

  // The default S3 URI `s3://` or the URI to a custom location, a specific bucket or prefix.
  locationScope?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AccessGrantsLocation extends Resource {
  // Amazon Resource Name (ARN) of the S3 Access Grants location.
  public accessGrantsLocationArn?: string;

  // Unique ID of the S3 Access Grants location.
  public accessGrantsLocationId?: string;

  //
  public accountId?: string;

  /*
The ARN of the IAM role that S3 Access Grants should use when fulfilling runtime access
requests to the location.
*/
  public iamRoleArn?: string;

  // The default S3 URI `s3://` or the URI to a custom location, a specific bucket or prefix.
  public locationScope?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "accountId", "", [], false, false),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "The ARN of the IAM role that S3 Access Grants should use when fulfilling runtime access\nrequests to the location.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "locationScope",
        "The default S3 URI `s3://` or the URI to a custom location, a specific bucket or prefix.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
