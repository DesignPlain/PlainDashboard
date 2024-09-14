import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SigningCertificateArgs {
  // The contents of the signing certificate in PEM-encoded format.
  certificateBody?: string;

  // The status you want to assign to the certificate. `Active` means that the certificate can be used for programmatic calls to Amazon Web Services `Inactive` means that the certificate cannot be used.
  status?: string;

  // The name of the user the signing certificate is for.
  userName?: string;
}
export class SigningCertificate extends DS_Resource {
  // The contents of the signing certificate in PEM-encoded format.
  public certificateBody?: string;

  // The ID for the signing certificate.
  public certificateId?: string;

  // The status you want to assign to the certificate. `Active` means that the certificate can be used for programmatic calls to Amazon Web Services `Inactive` means that the certificate cannot be used.
  public status?: string;

  // The name of the user the signing certificate is for.
  public userName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The name of the user the signing certificate is for.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateBody",
        "The contents of the signing certificate in PEM-encoded format.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status you want to assign to the certificate. `Active` means that the certificate can be used for programmatic calls to Amazon Web Services `Inactive` means that the certificate cannot be used.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
