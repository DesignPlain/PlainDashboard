import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission,
  lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission_GetTypes,
} from "../types/lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission";
import {
  lakeformation_DataLakeSettingsCreateTableDefaultPermission,
  lakeformation_DataLakeSettingsCreateTableDefaultPermission_GetTypes,
} from "../types/lakeformation_DataLakeSettingsCreateTableDefaultPermission";

export interface DataLakeSettingsArgs {
  // Up to three configuration blocks of principal permissions for default create database permissions. Detailed below.
  createDatabaseDefaultPermissions?: Array<lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission>;

  // Up to three configuration blocks of principal permissions for default create table permissions. Detailed below.
  createTableDefaultPermissions?: Array<lakeformation_DataLakeSettingsCreateTableDefaultPermission>;

  // Set of ARNs of AWS Lake Formation principals (IAM users or roles) with only view access to the resources.
  readOnlyAdmins?: Array<string>;

  // List of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs).
  trustedResourceOwners?: Array<string>;

  // Whether to allow Amazon EMR clusters to access data managed by Lake Formation.
  allowExternalDataFiltering?: boolean;

  /*
Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it.

> --NOTE:-- Although optional, not including `admins`, `create_database_default_permissions`, `create_table_default_permissions`, and/or `trusted_resource_owners` results in the setting being cleared.
*/
  authorizedSessionTagValueLists?: Array<string>;

  // A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.
  externalDataFilteringAllowLists?: Array<string>;

  // Set of ARNs of AWS Lake Formation principals (IAM users or roles).
  admins?: Array<string>;

  // Identifier for the Data Catalog. By default, the account ID.
  catalogId?: string;
}
export class DataLakeSettings extends Resource {
  // Up to three configuration blocks of principal permissions for default create table permissions. Detailed below.
  public createTableDefaultPermissions?: Array<lakeformation_DataLakeSettingsCreateTableDefaultPermission>;

  // A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.
  public externalDataFilteringAllowLists?: Array<string>;

  // Set of ARNs of AWS Lake Formation principals (IAM users or roles) with only view access to the resources.
  public readOnlyAdmins?: Array<string>;

  // List of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs).
  public trustedResourceOwners?: Array<string>;

  // Set of ARNs of AWS Lake Formation principals (IAM users or roles).
  public admins?: Array<string>;

  // Whether to allow Amazon EMR clusters to access data managed by Lake Formation.
  public allowExternalDataFiltering?: boolean;

  // Up to three configuration blocks of principal permissions for default create database permissions. Detailed below.
  public createDatabaseDefaultPermissions?: Array<lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission>;

  /*
Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it.

> --NOTE:-- Although optional, not including `admins`, `create_database_default_permissions`, `create_table_default_permissions`, and/or `trusted_resource_owners` results in the setting being cleared.
*/
  public authorizedSessionTagValueLists?: Array<string>;

  // Identifier for the Data Catalog. By default, the account ID.
  public catalogId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "createTableDefaultPermissions",
        "Up to three configuration blocks of principal permissions for default create table permissions. Detailed below.",
        lakeformation_DataLakeSettingsCreateTableDefaultPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "externalDataFilteringAllowLists",
        "A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "admins",
        "Set of ARNs of AWS Lake Formation principals (IAM users or roles).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "createDatabaseDefaultPermissions",
        "Up to three configuration blocks of principal permissions for default create database permissions. Detailed below.",
        lakeformation_DataLakeSettingsCreateDatabaseDefaultPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "readOnlyAdmins",
        "Set of ARNs of AWS Lake Formation principals (IAM users or roles) with only view access to the resources.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "trustedResourceOwners",
        "List of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowExternalDataFiltering",
        "Whether to allow Amazon EMR clusters to access data managed by Lake Formation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authorizedSessionTagValueLists",
        "Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it.\n\n> **NOTE:** Although optional, not including `admins`, `create_database_default_permissions`, `create_table_default_permissions`, and/or `trusted_resource_owners` results in the setting being cleared.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "Identifier for the Data Catalog. By default, the account ID.",
        [],
        false,
        true,
      ),
    ];
  }
}
