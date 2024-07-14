import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RepositoryArgs {
  // The default branch of the repository. The branch specified here needs to exist.
  defaultBranch?: string;

  // The description of the repository. This needs to be less than 1000 characters
  description?: string;

  // The ARN of the encryption key. If no key is specified, the default `aws/codecommit`` Amazon Web Services managed key is used.
  kmsKeyId?: string;

  // The name for the repository. This needs to be less than 100 characters.
  repositoryName?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Repository extends Resource {
  // The URL to use for cloning the repository over SSH.
  public cloneUrlSsh?: string;

  // The ID of the repository
  public repositoryId?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name for the repository. This needs to be less than 100 characters.
  public repositoryName?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the repository
  public arn?: string;

  // The URL to use for cloning the repository over HTTPS.
  public cloneUrlHttp?: string;

  // The default branch of the repository. The branch specified here needs to exist.
  public defaultBranch?: string;

  // The description of the repository. This needs to be less than 1000 characters
  public description?: string;

  // The ARN of the encryption key. If no key is specified, the default `aws/codecommit`` Amazon Web Services managed key is used.
  public kmsKeyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN of the encryption key. If no key is specified, the default `aws/codecommit`` Amazon Web Services managed key is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "repositoryName",
        "The name for the repository. This needs to be less than 100 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultBranch",
        "The default branch of the repository. The branch specified here needs to exist.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the repository. This needs to be less than 1000 characters",
        [],
        false,
        false,
      ),
    ];
  }
}
