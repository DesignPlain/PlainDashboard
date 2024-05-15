import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfileMysqlProfileSslConfig {
  /*
PEM-encoded certificate of the CA that signed the source database
server's certificate.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  CaCertificate?: string;

  /*
(Output)
Indicates whether the clientKey field is set.
*/
  CaCertificateSet?: boolean;

  /*
PEM-encoded certificate that will be used by the replica to
authenticate against the source database server. If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ClientCertificate?: string;

  /*
(Output)
Indicates whether the clientCertificate field is set.
*/
  ClientCertificateSet?: boolean;

  /*
PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ClientKey?: string;

  /*
(Output)
Indicates whether the clientKey field is set.
*/
  ClientKeySet?: boolean;
}

export function Datastream_ConnectionProfileMysqlProfileSslConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "CaCertificateSet",
      "(Output)\nIndicates whether the clientKey field is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "PEM-encoded certificate that will be used by the replica to\nauthenticate against the source database server. If this field\nis used then the 'clientKey' and the 'caCertificate' fields are\nmandatory.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ClientCertificateSet",
      "(Output)\nIndicates whether the clientCertificate field is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "PEM-encoded private key associated with the Client Certificate.\nIf this field is used then the 'client_certificate' and the\n'ca_certificate' fields are mandatory.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ClientKeySet",
      "(Output)\nIndicates whether the clientKey field is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CaCertificate",
      "PEM-encoded certificate of the CA that signed the source database\nserver's certificate.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
  ];
}
