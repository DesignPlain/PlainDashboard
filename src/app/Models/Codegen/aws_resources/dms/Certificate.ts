import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CertificateArgs {
  /*
The certificate identifier.

- Must contain from 1 to 255 alphanumeric characters and hyphens.
*/
  certificateId?: string;

  // The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set.
  certificatePem?: string;

  // The contents of the Oracle Wallet certificate for use with SSL, provided as a base64-encoded String. Either `certificate_pem` or `certificate_wallet` must be set.
  certificateWallet?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Certificate extends Resource {
  // The Amazon Resource Name (ARN) for the certificate.
  public certificateArn?: string;

  /*
The certificate identifier.

- Must contain from 1 to 255 alphanumeric characters and hyphens.
*/
  public certificateId?: string;

  // The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set.
  public certificatePem?: string;

  // The contents of the Oracle Wallet certificate for use with SSL, provided as a base64-encoded String. Either `certificate_pem` or `certificate_wallet` must be set.
  public certificateWallet?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "certificateId",
        "The certificate identifier.\n\n- Must contain from 1 to 255 alphanumeric characters and hyphens.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificatePem",
        "The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateWallet",
        "The contents of the Oracle Wallet certificate for use with SSL, provided as a base64-encoded String. Either `certificate_pem` or `certificate_wallet` must be set.",
        [],
        false,
        true,
      ),
    ];
  }
}
