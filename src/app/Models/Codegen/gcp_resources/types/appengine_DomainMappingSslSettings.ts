import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_DomainMappingSslSettings {
  /*
ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify `SslManagementType.MANUAL` on a `CREATE` or `UPDATE` request. You must be
authorized to administer the `AuthorizedCertificate` resource to manually map it to a DomainMapping resource.
Example: 12345.
*/
  certificateId?: string;

  /*
(Output)
ID of the managed `AuthorizedCertificate` resource currently being provisioned, if applicable. Until the new
managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the
provisioning process completes, the `certificateId` field will reflect the new managed certificate and this
field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the
`certificateId` field with an update request.
*/
  pendingManagedCertificateId?: string;

  /*
SSL management type for this domain. If `AUTOMATIC`, a managed certificate is automatically provisioned.
If `MANUAL`, `certificateId` must be manually specified in order to configure SSL for this domain.
Possible values are: `AUTOMATIC`, `MANUAL`.
*/
  sslManagementType?: string;
}

export function appengine_DomainMappingSslSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pendingManagedCertificateId",
      "(Output)\nID of the managed `AuthorizedCertificate` resource currently being provisioned, if applicable. Until the new\nmanaged certificate has been successfully provisioned, the previous SSL state will be preserved. Once the\nprovisioning process completes, the `certificateId` field will reflect the new managed certificate and this\nfield will be left empty. To remove SSL support while there is still a pending managed certificate, clear the\n`certificateId` field with an update request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslManagementType",
      "SSL management type for this domain. If `AUTOMATIC`, a managed certificate is automatically provisioned.\nIf `MANUAL`, `certificateId` must be manually specified in order to configure SSL for this domain.\nPossible values are: `AUTOMATIC`, `MANUAL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificateId",
      "ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will\nremove SSL support.\nBy default, a managed certificate is automatically created for every domain mapping. To omit SSL support\nor to configure SSL manually, specify `SslManagementType.MANUAL` on a `CREATE` or `UPDATE` request. You must be\nauthorized to administer the `AuthorizedCertificate` resource to manually map it to a DomainMapping resource.\nExample: 12345.",
      [],
      false,
      false,
    ),
  ];
}
