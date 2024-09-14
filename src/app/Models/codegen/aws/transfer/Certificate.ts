import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CertificateArgs {
  // The optional list of certificate that make up the chain for the certificate that is being imported.
  certificateChain?: string;

  // A short description that helps identify the certificate.
  description?: string;

  // The private key associated with the certificate being imported.
  privateKey?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION.
  usage?: string;

  // The valid certificate file required for the transfer.
  certificate?: string;
}
export class Certificate extends DS_Resource {
  // A short description that helps identify the certificate.
  public description?: string;

  //
  public tagsAll?: Map<string, string>;

  // The unique identifier for the AS2 certificate
  public certificateId?: string;

  // An date when the certificate becomes inactive
  public inactiveDate?: string;

  // The private key associated with the certificate being imported.
  public privateKey?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // An date when the certificate becomes active
  public activeDate?: string;

  // The ARN of the certificate
  public arn?: string;

  // The valid certificate file required for the transfer.
  public certificate?: string;

  // The optional list of certificate that make up the chain for the certificate that is being imported.
  public certificateChain?: string;

  // Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION.
  public usage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "The optional list of certificate that make up the chain for the certificate that is being imported.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A short description that helps identify the certificate.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateKey",
        "The private key associated with the certificate being imported.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "usage",
        "Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The valid certificate file required for the transfer.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
