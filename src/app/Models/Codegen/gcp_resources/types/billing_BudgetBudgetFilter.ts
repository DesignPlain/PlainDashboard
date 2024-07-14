import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  billing_BudgetBudgetFilterCustomPeriod,
  billing_BudgetBudgetFilterCustomPeriod_GetTypes,
} from "./billing_BudgetBudgetFilterCustomPeriod";

export interface billing_BudgetBudgetFilter {
  /*
A CalendarPeriod represents the abstract concept of a recurring time period that has a
canonical start. Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).
Exactly one of `calendar_period`, `custom_period` must be provided.
Possible values are: `MONTH`, `QUARTER`, `YEAR`, `CALENDAR_PERIOD_UNSPECIFIED`.
*/
  calendarPeriod?: string;

  /*
Optional. If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
--Note:-- If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
*/
  creditTypes?: Array<string>;

  /*
Specifies to track usage from any start date (required) to any end date (optional).
This time period is static, it does not recur.
Exactly one of `calendar_period`, `custom_period` must be provided.
Structure is documented below.
*/
  customPeriod?: billing_BudgetBudgetFilterCustomPeriod;

  /*
A single label and value pair specifying that usage from only
this set of labeled resources should be included in the budget.
*/
  labels?: Map<string, string>;

  /*
Specifies how credits should be treated when determining spend
for threshold calculations.
Default value is `INCLUDE_ALL_CREDITS`.
Possible values are: `INCLUDE_ALL_CREDITS`, `EXCLUDE_ALL_CREDITS`, `INCLUDE_SPECIFIED_CREDITS`.
*/
  creditTypesTreatment?: string;

  /*
A set of projects of the form projects/{project_number},
specifying that usage from only this set of projects should be
included in the budget. If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.
*/
  projects?: Array<string>;

  /*
A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId},
specifying that usage from only this set of folders and organizations should be included in the budget.
If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.
*/
  resourceAncestors?: Array<string>;

  /*
A set of services of the form services/{service_id},
specifying that usage from only this set of services should be
included in the budget. If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.
*/
  services?: Array<string>;

  /*
A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.
--Note:-- If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
*/
  subaccounts?: Array<string>;
}

export function billing_BudgetBudgetFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "calendarPeriod",
      'A CalendarPeriod represents the abstract concept of a recurring time period that has a\ncanonical start. Grammatically, "the start of the current CalendarPeriod".\nAll calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).\nExactly one of `calendar_period`, `custom_period` must be provided.\nPossible values are: `MONTH`, `QUARTER`, `YEAR`, `CALENDAR_PERIOD_UNSPECIFIED`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A single label and value pair specifying that usage from only\nthis set of labeled resources should be included in the budget.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "projects",
      "A set of projects of the form projects/{project_number},\nspecifying that usage from only this set of projects should be\nincluded in the budget. If omitted, the report will include\nall usage for the billing account, regardless of which project\nthe usage occurred on.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "services",
      "A set of services of the form services/{service_id},\nspecifying that usage from only this set of services should be\nincluded in the budget. If omitted, the report will include\nusage for all the services. The service names are available\nthrough the Catalog API:\nhttps://cloud.google.com/billing/v1/how-tos/catalog-api.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subaccounts",
      "A set of subaccounts of the form billingAccounts/{account_id},\nspecifying that usage from only this set of subaccounts should\nbe included in the budget. If a subaccount is set to the name of\nthe parent account, usage from the parent account will be included.\nIf the field is omitted, the report will include usage from the parent\naccount and all subaccounts, if they exist.\n**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "creditTypes",
      "Optional. If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,\nthis is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.\nIf creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.\n**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPeriod",
      "Specifies to track usage from any start date (required) to any end date (optional).\nThis time period is static, it does not recur.\nExactly one of `calendar_period`, `custom_period` must be provided.\nStructure is documented below.",
      billing_BudgetBudgetFilterCustomPeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "creditTypesTreatment",
      "Specifies how credits should be treated when determining spend\nfor threshold calculations.\nDefault value is `INCLUDE_ALL_CREDITS`.\nPossible values are: `INCLUDE_ALL_CREDITS`, `EXCLUDE_ALL_CREDITS`, `INCLUDE_SPECIFIED_CREDITS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceAncestors",
      "A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId},\nspecifying that usage from only this set of folders and organizations should be included in the budget.\nIf omitted, the budget includes all usage that the billing account pays for. If the folder or organization\ncontains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
