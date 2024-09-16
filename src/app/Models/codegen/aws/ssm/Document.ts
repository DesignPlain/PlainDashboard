import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssm_DocumentAttachmentsSource,
  ssm_DocumentAttachmentsSource_GetTypes,
} from '../types/ssm_DocumentAttachmentsSource';
import {
  ssm_DocumentParameter,
  ssm_DocumentParameter_GetTypes,
} from '../types/ssm_DocumentParameter';

export interface DocumentArgs {
  // The target type which defines the kinds of resources the document can run on. For example, `/AWS::EC2::Instance`. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html).
  targetType?: string;

  // The version of the artifact associated with the document. For example, `12.6`. This value is unique across all versions of a document, and can't be changed.
  versionName?: string;

  // The format of the document. Valid values: `JSON`, `TEXT`, `YAML`.
  documentFormat?: string;

  // The type of the document. For a list of valid values, see the [API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html#systemsmanager-CreateDocument-request-DocumentType).
  documentType?: string;

  // The name of the document.
  name?: string;

  // Additional permissions to attach to the document. See Permissions below for details.
  permissions?: Map<string, string>;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // One or more configuration blocks describing attachments sources to a version of a document. See `attachments_source` block below for details.
  attachmentsSources?: Array<ssm_DocumentAttachmentsSource>;

  // The content for the SSM document in JSON or YAML format. The content of the document must not exceed 64KB. This quota also includes the content specified for input parameters at runtime. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command.
  content?: string;
}
export class Document extends DS_Resource {
  // The Sha256 or Sha1 hash created by the system when the document was created.
  public hash?: string;

  // The name of the document.
  public name?: string;

  // The Amazon Resource Name (ARN) of the document.
  public arn?: string;

  // The content for the SSM document in JSON or YAML format. The content of the document must not exceed 64KB. This quota also includes the content specified for input parameters at runtime. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command.
  public content?: string;

  // The date the document was created.
  public createdDate?: string;

  // One or more configuration blocks describing the parameters for the document. See `parameter` block below for details.
  public parameters?: Array<ssm_DocumentParameter>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The version of the artifact associated with the document. For example, `12.6`. This value is unique across all versions of a document, and can't be changed.
  public versionName?: string;

  // The document version.
  public documentVersion?: string;

  // The hash type of the document. Valid values: `Sha256`, `Sha1`.
  public hashType?: string;

  // The latest version of the document.
  public latestVersion?: string;

  // The list of operating system (OS) platforms compatible with this SSM document. Valid values: `Windows`, `Linux`, `MacOS`.
  public platformTypes?: Array<string>;

  // The status of the SSM document. Valid values: `Creating`, `Active`, `Updating`, `Deleting`, `Failed`.
  public status?: string;

  // The target type which defines the kinds of resources the document can run on. For example, `/AWS::EC2::Instance`. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html).
  public targetType?: string;

  // The type of the document. For a list of valid values, see the [API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html#systemsmanager-CreateDocument-request-DocumentType).
  public documentType?: string;

  // The Amazon Web Services user that created the document.
  public owner?: string;

  // Additional permissions to attach to the document. See Permissions below for details.
  public permissions?: Map<string, string>;

  // The format of the document. Valid values: `JSON`, `TEXT`, `YAML`.
  public documentFormat?: string;

  // The schema version of the document.
  public schemaVersion?: string;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // One or more configuration blocks describing attachments sources to a version of a document. See `attachments_source` block below for details.
  public attachmentsSources?: Array<ssm_DocumentAttachmentsSource>;

  // The default version of the document.
  public defaultVersion?: string;

  // A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'targetType',
        'The target type which defines the kinds of resources the document can run on. For example, `/AWS::EC2::Instance`. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'versionName',
        "The version of the artifact associated with the document. For example, `12.6`. This value is unique across all versions of a document, and can't be changed.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'documentType',
        'The type of the document. For a list of valid values, see the [API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html#systemsmanager-CreateDocument-request-DocumentType).',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the document.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'attachmentsSources',
        'One or more configuration blocks describing attachments sources to a version of a document. See `attachments_source` block below for details.',
        () => ssm_DocumentAttachmentsSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'documentFormat',
        'The format of the document. Valid values: `JSON`, `TEXT`, `YAML`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'permissions',
        'Additional permissions to attach to the document. See Permissions below for details.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'content',
        'The content for the SSM document in JSON or YAML format. The content of the document must not exceed 64KB. This quota also includes the content specified for input parameters at runtime. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
