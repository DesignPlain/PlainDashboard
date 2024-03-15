import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectArgs {
  /*
A set of key/value label pairs to assign to the project.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The display name of the project.
  Name?: string;

  /*
The numeric ID of the organization this project belongs to.
Changing this forces a new project to be created.  Only one of
`org_id` or `folder_id` may be specified. If the `org_id` is
specified then the project is created at the top level. Changing
this forces the project to be migrated to the newly specified
organization.
*/
  OrgId?: string;

  // The project ID. Changing this forces a new project to be created.
  ProjectId?: string;

  /*
If true, the resource can be deleted
without deleting the Project via the Google API.
*/
  SkipDelete?: boolean;

  /*
Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note
that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even
if you set auto_create_network to false, since the network will exist momentarily.
*/
  AutoCreateNetwork?: boolean;

  /*
The alphanumeric ID of the billing account this project
belongs to. The user or service account performing this operation with the provider
must have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.
See [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)
for more details.
*/
  BillingAccount?: string;

  /*
The numeric ID of the folder this project should be
created under. Only one of `org_id` or `folder_id` may be
specified. If the `folder_id` is specified, then the project is
created under the specified folder. Changing this forces the
project to be migrated to the newly specified folder.
*/
  FolderId?: string;
}
export class Project extends Resource {
  // The project ID. Changing this forces a new project to be created.
  public ProjectId?: string;

  /*
If true, the resource can be deleted
without deleting the Project via the Google API.
*/
  public SkipDelete?: boolean;

  /*
Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note
that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even
if you set auto_create_network to false, since the network will exist momentarily.
*/
  public AutoCreateNetwork?: boolean;

  /*
The numeric ID of the folder this project should be
created under. Only one of `org_id` or `folder_id` may be
specified. If the `folder_id` is specified, then the project is
created under the specified folder. Changing this forces the
project to be migrated to the newly specified folder.
*/
  public FolderId?: string;

  /*
A set of key/value label pairs to assign to the project.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The numeric identifier of the project.
  public Number?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  /*
The alphanumeric ID of the billing account this project
belongs to. The user or service account performing this operation with the provider
must have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.
See [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)
for more details.
*/
  public BillingAccount?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The display name of the project.
  public Name?: string;

  /*
The numeric ID of the organization this project belongs to.
Changing this forces a new project to be created.  Only one of
`org_id` or `folder_id` may be specified. If the `org_id` is
specified then the project is created at the top level. Changing
this forces the project to be migrated to the newly specified
organization.
*/
  public OrgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ProjectId",
        "The project ID. Changing this forces a new project to be created.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "SkipDelete",
        "If true, the resource can be deleted\nwithout deleting the Project via the Google API.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AutoCreateNetwork",
        "Create the 'default' network automatically. Default true. If set to false, the default network will be deleted. Note\nthat, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even\nif you set auto_create_network to false, since the network will exist momentarily.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "The alphanumeric ID of the billing account this project\nbelongs to. The user or service account performing this operation with the provider\nmust have at mininum Billing Account User privileges (`roles/billing.user`) on the billing account.\nSee [Google Cloud Billing API Access Control](https://cloud.google.com/billing/docs/how-to/billing-access)\nfor more details.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FolderId",
        "The numeric ID of the folder this project should be\ncreated under. Only one of `org_id` or `folder_id` may be\nspecified. If the `folder_id` is specified, then the project is\ncreated under the specified folder. Changing this forces the\nproject to be migrated to the newly specified folder.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to the project.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The display name of the project.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The numeric ID of the organization this project belongs to.\nChanging this forces a new project to be created.  Only one of\n`org_id` or `folder_id` may be specified. If the `org_id` is\nspecified then the project is created at the top level. Changing\nthis forces the project to be migrated to the newly specified\norganization.",
      ),
    ];
  }
}
