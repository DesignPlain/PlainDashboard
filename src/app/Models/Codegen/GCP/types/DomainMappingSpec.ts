export interface DomainMappingSpec {
  /*
The mode of the certificate.
Default value is `AUTOMATIC`.
Possible values are: `NONE`, `AUTOMATIC`.

- - -
*/
  CertificateMode?: string;

  /*
If set, the mapping will override any mapping set before this spec was set.
It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.
*/
  ForceOverride?: boolean;

  /*
The name of the Cloud Run Service that this DomainMapping applies to.
The route must exist.
*/
  RouteName?: string;
}
