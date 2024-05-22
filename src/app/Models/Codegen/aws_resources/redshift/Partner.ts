import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PartnerArgs {
  // The Amazon Web Services account ID that owns the cluster.
  accountId?: string;

  // The cluster identifier of the cluster that receives data from the partner.
  clusterIdentifier?: string;

  // The name of the database that receives data from the partner.
  databaseName?: string;

  // The name of the partner that is authorized to send data.
  partnerName?: string;
}
export class Partner extends Resource {
  // The Amazon Web Services account ID that owns the cluster.
  public accountId?: string;

  // The cluster identifier of the cluster that receives data from the partner.
  public clusterIdentifier?: string;

  // The name of the database that receives data from the partner.
  public databaseName?: string;

  // The name of the partner that is authorized to send data.
  public partnerName?: string;

  // (Optional) The partner integration status.
  public status?: string;

  // (Optional) The status message provided by the partner.
  public statusMessage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the database that receives data from the partner.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "partnerName",
        "The name of the partner that is authorized to send data.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The Amazon Web Services account ID that owns the cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier of the cluster that receives data from the partner.",
        [],
        true,
        true,
      ),
    ];
  }
}
