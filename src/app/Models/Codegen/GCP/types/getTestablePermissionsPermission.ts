export interface getTestablePermissionsPermission {
  // Release stage of the permission.
  Stage?: string;

  // Human readable title of the permission.
  Title?: string;

  // Whether the corresponding API has been enabled for the resource.
  ApiDisabled?: boolean;

  // The level of support for custom roles. Can be one of `"NOT_SUPPORTED"`, `"SUPPORTED"`, `"TESTING"`. Default is `"SUPPORTED"`
  CustomSupportLevel?: string;

  // Name of the permission.
  Name?: string;
}
