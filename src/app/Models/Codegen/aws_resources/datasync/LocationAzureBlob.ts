import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datasync_LocationAzureBlobSasConfiguration,
  datasync_LocationAzureBlobSasConfiguration_GetTypes,
} from "../types/datasync_LocationAzureBlobSasConfiguration";

export interface LocationAzureBlobArgs {
  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The access tier that you want your objects or files transferred into. Valid values: `HOT`, `COOL` and `ARCHIVE`. Default: `HOT`.
  accessTier?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  agentArns?: Array<string>;

  // The authentication method DataSync uses to access your Azure Blob Storage. Valid values: `SAS`.
  authenticationType?: string;

  // The type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Valid values: `BLOB`. Default: `BLOB`.
  blobType?: string;

  // The URL of the Azure Blob Storage container involved in your transfer.
  containerUrl?: string;

  // The SAS configuration that allows DataSync to access your Azure Blob Storage. See configuration below.
  sasConfiguration?: datasync_LocationAzureBlobSasConfiguration;

  // Path segments if you want to limit your transfer to a virtual directory in the container.
  subdirectory?: string;
}
export class LocationAzureBlob extends Resource {
  // The access tier that you want your objects or files transferred into. Valid values: `HOT`, `COOL` and `ARCHIVE`. Default: `HOT`.
  public accessTier?: string;

  // The URL of the Azure Blob Storage container involved in your transfer.
  public containerUrl?: string;

  // The SAS configuration that allows DataSync to access your Azure Blob Storage. See configuration below.
  public sasConfiguration?: datasync_LocationAzureBlobSasConfiguration;

  // Path segments if you want to limit your transfer to a virtual directory in the container.
  public subdirectory?: string;

  //
  public uri?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of DataSync Agent ARNs with which this location will be associated.
  public agentArns?: Array<string>;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The authentication method DataSync uses to access your Azure Blob Storage. Valid values: `SAS`.
  public authenticationType?: string;

  // The type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Valid values: `BLOB`. Default: `BLOB`.
  public blobType?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Path segments if you want to limit your transfer to a virtual directory in the container.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessTier",
        "The access tier that you want your objects or files transferred into. Valid values: `HOT`, `COOL` and `ARCHIVE`. Default: `HOT`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "agentArns",
        "A list of DataSync Agent ARNs with which this location will be associated.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationType",
        "The authentication method DataSync uses to access your Azure Blob Storage. Valid values: `SAS`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "blobType",
        "The type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Valid values: `BLOB`. Default: `BLOB`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerUrl",
        "The URL of the Azure Blob Storage container involved in your transfer.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sasConfiguration",
        "The SAS configuration that allows DataSync to access your Azure Blob Storage. See configuration below.",
        datasync_LocationAzureBlobSasConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
