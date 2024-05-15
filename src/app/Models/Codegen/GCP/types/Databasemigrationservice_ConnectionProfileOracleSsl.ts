import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileOracleSsl {
  /*
Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  CaCertificate?: string;

  /*
Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ClientCertificate?: string;

  /*
Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ClientKey?: string;

  /*
(Output)
The current connection profile state.
*/
  Type?: string;
}

export function Databasemigrationservice_ConnectionProfileOracleSsl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CaCertificate",
      "Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.\nThe replica will use this certificate to verify it's connecting to the right host.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.\nIf this field is used then the 'clientKey' field is mandatory\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.\nIf this field is used then the 'clientCertificate' field is mandatory.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "(Output)\nThe current connection profile state.",
      [],
      false,
      false,
    ),
  ];
}
