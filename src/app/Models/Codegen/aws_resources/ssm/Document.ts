import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_DocumentAttachmentsSource,
  ssm_DocumentAttachmentsSource_GetTypes,
} from "../types/ssm_DocumentAttachmentsSource";
import {
  ssm_DocumentParameter,
  ssm_DocumentParameter_GetTypes,
} from "../types/ssm_DocumentParameter";

export interface DocumentArgs {
  // The type of the document. Valid document types include: `Automation`, `Command`, `Package`, `Policy`, and `Session`
  documentType?: string;

  // The name of the document.
  name?: string;

  // Additional Permissions to attach to the document. See Permissions below for details.
  permissions?: Map<string, string>;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
  targetType?: string;

  // A field specifying the version of the artifact you are creating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document and cannot be changed for an existing document version.
  versionName?: string;

  // One or more configuration blocks describing attachments sources to a version of a document. Defined below.
  attachmentsSources?: Array<ssm_DocumentAttachmentsSource>;

  // The format of the document. Valid document types include: `JSON` and `YAML`
  documentFormat?: string;

  // The JSON or YAML content of the document.
  content?: string;
}
export class Document extends Resource {
  // A field specifying the version of the artifact you are creating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document and cannot be changed for an existing document version.
  public versionName?: string;

  //
  public arn?: string;

  // The date the document was created.
  public createdDate?: string;

  // The description of the document.
  public description?: string;

  // The sha1 or sha256 of the document content
  public hash?: string;

  // The default version of the document.
  public defaultVersion?: string;

  // The type of the document. Valid document types include: `Automation`, `Command`, `Package`, `Policy`, and `Session`
  public documentType?: string;

  // The document version.
  public documentVersion?: string;

  // The latest version of the document.
  public latestVersion?: string;

  // A list of OS platforms compatible with this SSM document, either "Windows" or "Linux".
  public platformTypes?: Array<string>;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
  public targetType?: string;

  // The JSON or YAML content of the document.
  public content?: string;

  // The format of the document. Valid document types include: `JSON` and `YAML`
  public documentFormat?: string;

  // The AWS user account of the person who created the document.
  public owner?: string;

  // The parameters that are available to this document.
  public parameters?: Array<ssm_DocumentParameter>;

  // The schema version of the document.
  public schemaVersion?: string;

  // "Creating", "Active" or "Deleting". The current status of the document.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // One or more configuration blocks describing attachments sources to a version of a document. Defined below.
  public attachmentsSources?: Array<ssm_DocumentAttachmentsSource>;

  // "Sha1" "Sha256". The hashing algorithm used when hashing the content.
  public hashType?: string;

  // The name of the document.
  public name?: string;

  // Additional Permissions to attach to the document. See Permissions below for details.
  public permissions?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetType",
        "The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attachmentsSources",
        "One or more configuration blocks describing attachments sources to a version of a document. Defined below.",
        ssm_DocumentAttachmentsSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "documentFormat",
        "The format of the document. Valid document types include: `JSON` and `YAML`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "The JSON or YAML content of the document.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionName",
        'A field specifying the version of the artifact you are creating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document and cannot be changed for an existing document version.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "documentType",
        "The type of the document. Valid document types include: `Automation`, `Command`, `Package`, `Policy`, and `Session`",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the document.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "permissions",
        "Additional Permissions to attach to the document. See Permissions below for details.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
