import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ServiceNetworkArgs {
  // Type of IAM policy. Either `NONE` or `AWS_IAM`.
  authType?: string;

  /*
Name of the service network

The following arguments are optional:
*/
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ServiceNetwork extends Resource {
  // ARN of the Service Network.
  public arn?: string;

  // Type of IAM policy. Either `NONE` or `AWS_IAM`.
  public authType?: string;

  /*
Name of the service network

The following arguments are optional:
*/
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authType",
        "Type of IAM policy. Either `NONE` or `AWS_IAM`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the service network\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
    ];
  }
}
