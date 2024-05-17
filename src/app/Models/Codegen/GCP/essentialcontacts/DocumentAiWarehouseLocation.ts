import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentAiWarehouseLocationArgs {
  // The unique identifier of the project.
  ProjectNumber?: string;

  /*
The access control mode for accessing the customer data.
Possible values are: `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI`, `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID`, `ACL_MODE_UNIVERSAL_ACCESS`.
*/
  AccessControlMode?: string;

  /*
The type of database used to store customer data.
Possible values are: `DB_INFRA_SPANNER`, `DB_CLOUD_SQL_POSTGRES`.
*/
  DatabaseType?: string;

  /*
The default role for the person who create a document.
Possible values are: `DOCUMENT_ADMIN`, `DOCUMENT_EDITOR`, `DOCUMENT_VIEWER`.
*/
  DocumentCreatorDefaultRole?: string;

  /*
The KMS key used for CMEK encryption. It is required that
the kms key is in the same region as the endpoint. The
same key will be used for all provisioned resources, if
encryption is available. If the kmsKey is left empty, no
encryption will be enforced.
*/
  KmsKey?: string;

  /*
The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.


- - -
*/
  Location?: string;
}
export class DocumentAiWarehouseLocation extends Resource {
  /*
The access control mode for accessing the customer data.
Possible values are: `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI`, `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID`, `ACL_MODE_UNIVERSAL_ACCESS`.
*/
  public AccessControlMode?: string;

  /*
The type of database used to store customer data.
Possible values are: `DB_INFRA_SPANNER`, `DB_CLOUD_SQL_POSTGRES`.
*/
  public DatabaseType?: string;

  /*
The default role for the person who create a document.
Possible values are: `DOCUMENT_ADMIN`, `DOCUMENT_EDITOR`, `DOCUMENT_VIEWER`.
*/
  public DocumentCreatorDefaultRole?: string;

  /*
The KMS key used for CMEK encryption. It is required that
the kms key is in the same region as the endpoint. The
same key will be used for all provisioned resources, if
encryption is available. If the kmsKey is left empty, no
encryption will be enforced.
*/
  public KmsKey?: string;

  /*
The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.


- - -
*/
  public Location?: string;

  // The unique identifier of the project.
  public ProjectNumber?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ProjectNumber",
        "The unique identifier of the project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AccessControlMode",
        "The access control mode for accessing the customer data.\nPossible values are: `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI`, `ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID`, `ACL_MODE_UNIVERSAL_ACCESS`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseType",
        "The type of database used to store customer data.\nPossible values are: `DB_INFRA_SPANNER`, `DB_CLOUD_SQL_POSTGRES`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DocumentCreatorDefaultRole",
        "The default role for the person who create a document.\nPossible values are: `DOCUMENT_ADMIN`, `DOCUMENT_EDITOR`, `DOCUMENT_VIEWER`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKey",
        "The KMS key used for CMEK encryption. It is required that\nthe kms key is in the same region as the endpoint. The\nsame key will be used for all provisioned resources, if\nencryption is available. If the kmsKey is left empty, no\nencryption will be enforced.",
        [],
        false,
        true,
      ),
    ];
  }
}
