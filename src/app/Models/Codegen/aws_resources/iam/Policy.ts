import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PolicyArgs {
  // The name of the policy. If omitted, the provider will assign a random, unique name.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  /*
Path in which to create the policy.
See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
*/
  path?: string;

  // The policy document. This is a JSON formatted string.
  policy?: string;

  // Map of resource tags for the IAM Policy. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description of the IAM policy.
  description?: string;
}
export class Policy extends Resource {
  // The ARN assigned by AWS to this policy.
  public arn?: string;

  /*
Path in which to create the policy.
See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
*/
  public path?: string;

  // The policy's ID.
  public policyId?: string;

  // Description of the IAM policy.
  public description?: string;

  // The name of the policy. If omitted, the provider will assign a random, unique name.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // The policy document. This is a JSON formatted string.
  public policy?: string;

  // Map of resource tags for the IAM Policy. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the IAM policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the policy. If omitted, the provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "path",
        "Path in which to create the policy.\nSee [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document. This is a JSON formatted string.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags for the IAM Policy. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
