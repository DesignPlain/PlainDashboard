import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CertificateAuthorityCertificateArgs {
  // PEM-encoded certificate for the Certificate Authority.
  certificate?: string;

  // ARN of the Certificate Authority.
  certificateAuthorityArn?: string;

  // PEM-encoded certificate chain that includes any intermediate certificates and chains up to root CA. Required for subordinate Certificate Authorities. Not allowed for root Certificate Authorities.
  certificateChain?: string;
}
export class CertificateAuthorityCertificate extends DS_Resource {
  // ARN of the Certificate Authority.
  public certificateAuthorityArn?: string;

  // PEM-encoded certificate chain that includes any intermediate certificates and chains up to root CA. Required for subordinate Certificate Authorities. Not allowed for root Certificate Authorities.
  public certificateChain?: string;

  // PEM-encoded certificate for the Certificate Authority.
  public certificate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "PEM-encoded certificate for the Certificate Authority.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthorityArn",
        "ARN of the Certificate Authority.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "PEM-encoded certificate chain that includes any intermediate certificates and chains up to root CA. Required for subordinate Certificate Authorities. Not allowed for root Certificate Authorities.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
