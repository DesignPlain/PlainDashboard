import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProjectArgs {
  // The project ID. Changing this forces a new project to be created.
  projectId?: string;

  /*
If true, the resource can be deleted
without deleting the Project via the Google API.
*/
  skipDelete?: boolean;

  /*
Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note
that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even
if you set auto_create_network to false, since the network will exist momentarily.
*/
  autoCreateNetwork?: boolean;

  /*
The alphanumeric ID of the billing account this project
belongs to. The user or service account performing this operation with the provider
must have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.
See [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)
for more details.
*/
  billingAccount?: string;

  /*
The numeric ID of the folder this project should be
created under. Only one of `org_id` or `folder_id` may be
specified. If the `folder_id` is specified, then the project is
created under the specified folder. Changing this forces the
project to be migrated to the newly specified folder.
*/
  folderId?: string;

  /*
A set of key/value label pairs to assign to the project.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The display name of the project.
  name?: string;

  /*
The numeric ID of the organization this project belongs to.
Changing this forces a new project to be created.  Only one of
`org_id` or `folder_id` may be specified. If the `org_id` is
specified then the project is created at the top level. Changing
this forces the project to be migrated to the newly specified
organization.
*/
  orgId?: string;
}
export class Project extends Resource {
  /*
Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note
that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even
if you set auto_create_network to false, since the network will exist momentarily.
*/
  public autoCreateNetwork?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The display name of the project.
  public name?: string;

  // The numeric identifier of the project.
  public number?: string;

  /*
If true, the resource can be deleted
without deleting the Project via the Google API.
*/
  public skipDelete?: boolean;

  /*
The alphanumeric ID of the billing account this project
belongs to. The user or service account performing this operation with the provider
must have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.
See [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)
for more details.
*/
  public billingAccount?: string;

  /*
The numeric ID of the folder this project should be
created under. Only one of `org_id` or `folder_id` may be
specified. If the `folder_id` is specified, then the project is
created under the specified folder. Changing this forces the
project to be migrated to the newly specified folder.
*/
  public folderId?: string;

  /*
A set of key/value label pairs to assign to the project.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The numeric ID of the organization this project belongs to.
Changing this forces a new project to be created.  Only one of
`org_id` or `folder_id` may be specified. If the `org_id` is
specified then the project is created at the top level. Changing
this forces the project to be migrated to the newly specified
organization.
*/
  public orgId?: string;

  // The project ID. Changing this forces a new project to be created.
  public projectId?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "skipDelete",
        "If true, the resource can be deleted\nwithout deleting the Project via the Google API.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoCreateNetwork",
        "Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note\nthat, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even\nif you set auto_create_network to false, since the network will exist momentarily.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "billingAccount",
        "The alphanumeric ID of the billing account this project\nbelongs to. The user or service account performing this operation with the provider\nmust have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.\nSee [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)\nfor more details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "folderId",
        "The numeric ID of the folder this project should be\ncreated under. Only one of `org_id` or `folder_id` may be\nspecified. If the `folder_id` is specified, then the project is\ncreated under the specified folder. Changing this forces the\nproject to be migrated to the newly specified folder.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to the project.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The display name of the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The numeric ID of the organization this project belongs to.\nChanging this forces a new project to be created.  Only one of\n`org_id` or `folder_id` may be specified. If the `org_id` is\nspecified then the project is created at the top level. Changing\nthis forces the project to be migrated to the newly specified\norganization.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectId",
        "The project ID. Changing this forces a new project to be created.",
        [],
        false,
        true,
      ),
    ];
  }
}
