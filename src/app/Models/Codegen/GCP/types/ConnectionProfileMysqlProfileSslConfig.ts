export interface ConnectionProfileMysqlProfileSslConfig {
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
