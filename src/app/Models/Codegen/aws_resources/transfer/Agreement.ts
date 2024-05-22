import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AgreementArgs {
  // The unique identifier for the AS2 partner profile.
  partnerProfileId?: string;

  // The unique server identifier for the server instance. This is the specific server the agreement uses.
  serverId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.
  accessRole?: string;

  // The landing directory for the files transferred by using the AS2 protocol.
  baseDirectory?: string;

  // The Optional description of the transdfer.
  description?: string;

  // The unique identifier for the AS2 local profile.
  localProfileId?: string;
}
export class Agreement extends Resource {
  // The unique identifier for the AS2 local profile.
  public localProfileId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The ARN of the agreement.
  public arn?: string;

  // The landing directory for the files transferred by using the AS2 protocol.
  public baseDirectory?: string;

  // The Optional description of the transdfer.
  public description?: string;

  // The unique identifier for the AS2 partner profile.
  public partnerProfileId?: string;

  // The unique server identifier for the server instance. This is the specific server the agreement uses.
  public serverId?: string;

  //
  public status?: string;

  // The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.
  public accessRole?: string;

  // The unique identifier for the AS2 agreement.
  public agreementId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The Optional description of the transdfer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "localProfileId",
        "The unique identifier for the AS2 local profile.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "partnerProfileId",
        "The unique identifier for the AS2 partner profile.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverId",
        "The unique server identifier for the server instance. This is the specific server the agreement uses.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessRole",
        "The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "baseDirectory",
        "The landing directory for the files transferred by using the AS2 protocol.",
        [],
        true,
        false,
      ),
    ];
  }
}
