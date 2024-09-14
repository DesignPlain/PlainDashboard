import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface databasemigrationservice_ConnectionProfilePostgresqlSsl {
  /*
Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  clientKey?: string;

  /*
(Output)
The current connection profile state.
*/
  type?: string;

  /*
Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  caCertificate?: string;

  /*
Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  clientCertificate?: string;
}

export function databasemigrationservice_ConnectionProfilePostgresqlSsl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "(Output)\nThe current connection profile state.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "caCertificate",
      "Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.\nThe replica will use this certificate to verify it's connecting to the right host.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientCertificate",
      "Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.\nIf this field is used then the 'clientKey' field is mandatory\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientKey",
      "Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.\nIf this field is used then the 'clientCertificate' field is mandatory.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
  ];
}
