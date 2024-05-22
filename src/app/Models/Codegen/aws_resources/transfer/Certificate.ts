import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CertificateArgs {
  // The valid certificate file required for the transfer.
  certificate?: string;

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
}
export class Certificate extends Resource {
  // An date when the certificate becomes active
  public activeDate?: string;

  // The valid certificate file required for the transfer.
  public certificate?: string;

  // An date when the certificate becomes inactive
  public inactiveDate?: string;

  // The private key associated with the certificate being imported.
  public privateKey?: string;

  // Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION.
  public usage?: string;

  // The ARN of the certificate
  public arn?: string;

  // The optional list of certificate that make up the chain for the certificate that is being imported.
  public certificateChain?: string;

  // The unique identifier for the AS2 certificate
  public certificateId?: string;

  // A short description that helps identify the certificate.
  public description?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The valid certificate file required for the transfer.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "The optional list of certificate that make up the chain for the certificate that is being imported.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A short description that helps identify the certificate.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateKey",
        "The private key associated with the certificate being imported.",
        [],
        false,
        true,
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
        "usage",
        "Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION.",
        [],
        true,
        true,
      ),
    ];
  }
}
